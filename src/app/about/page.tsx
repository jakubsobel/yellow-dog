import Link from "next/link";

export default function About() {
  return (
    <section className="p-8 prose lg:prose-xl">
      <h1>About Us</h1>
      <p>This is the about page of our Next.js application.</p>
      <p>Learn more about our company and mission.</p>
      <Link href="/" className="text-blue-500 ">
        Go back to home
      </Link>
    </section>
  );
}
