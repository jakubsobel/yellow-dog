import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="flex flex-col gap-2 p-8">
        <h1 className="text-3xl font-bold underline">About Us</h1>
        <p className="text-lg">
          This is the about page of our Next.js application.
        </p>
        <p className="text-base">
          <code className="font-mono">
            Learn more about our company and mission.
          </code>
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </section>
    </main>
  );
}
