// import { createClient } from 'redis/dist';
import { NextResponse } from 'next/server';

// // Redisクライアントの設定
// const redisClient = createClient({
//   url: process.env.REDIS_URL || 'redis://localhost:6379',
// });

// redisClient.on('error', (err) => console.error('Redis Client Error', err));

// // 接続の確立
// async function connectToRedis() {
//   if (!redisClient.isOpen) {
//     await redisClient.connect();
//   }
// }

export async function GET() {
  console.log('GET');
  return NextResponse.json({ message: 'Hello from the cache API' });
}

// export async function POST(req: Request) {
//   try {
//     await connectToRedis();

//     const { key, value } = await req.json();

//     // Redisにデータをセット
//     await redisClient.set(key, value);

//     return NextResponse.json({ message: `Key ${key} set with value: ${value}` });
//   } catch (error) {
//     console.error('Error connecting to Redis:', error);
//     return NextResponse.json({ error: 'Failed to connect to Redis' }, { status: 500 });
//   }
// }
