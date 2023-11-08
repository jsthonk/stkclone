import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Next.js 13 we&apos;re coming!</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
