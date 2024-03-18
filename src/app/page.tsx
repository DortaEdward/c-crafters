import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth()
  return (
    <main className="flex flex-col items-center justify-center bg-white flex-grow gap-1">
      <h1 className="sm:text-5xl text-3xl tracking-tighter font-bold">Gamify your tasks</h1>
      <p className="text-xl text-center text-gray-500 max-w-[600px]">Level up your productivity with our gamified task manager. Earn rewards as you complete your to-dos.</p>
      <div className="my-4">
        {
          userId
          ? <div className="flex gap-4">
              <Link href="/dashboard" className="h-10 bg-black text-white inline-flex items-center justify-center px-4 rounded font-medium">Dashboard</Link>
              <Link href="/learn" className="h-10 inline-flex items-center justify-center px-4 rounded font-medium">Learn More</Link>
            </div>
          : <div></div>
        }
      </div>
    </main>
  );
}
