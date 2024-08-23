FROM node:18-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_INSTANCE_NAME_A
ARG NEXT_PUBLIC_INSTANCE_NAME_B

COPY package*.json ./
RUN npm install

COPY . .

# 環境変数を使ってビルドする
RUN NEXT_PUBLIC_INSTANCE_NAME_A=${NEXT_PUBLIC_INSTANCE_NAME_A} NEXT_PUBLIC_INSTANCE_NAME_B=${NEXT_PUBLIC_INSTANCE_NAME_B} npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app /app

# 実行時に環境変数を再度設定
ENV NEXT_PUBLIC_INSTANCE_NAME_A=${NEXT_PUBLIC_INSTANCE_NAME_A}
ENV NEXT_PUBLIC_INSTANCE_NAME_B=${NEXT_PUBLIC_INSTANCE_NAME_B}

EXPOSE 3000
CMD ["npm", "run", "start"]