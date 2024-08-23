export default function Home() {
  const instanceNameA = process.env.NEXT_PUBLIC_INSTANCE_NAME_A;
  const instanceNameB = process.env.NEXT_PUBLIC_INSTANCE_NAME_B;

  return (
    <div>
      <h1>Welcome to Next.js!!!</h1>
      <p>Served from A: {instanceNameA && '💡'}</p>
      <p>Served from B: {instanceNameB && '💡'}</p>
    </div>
  );
}
