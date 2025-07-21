import Link from "next/link";

export default function Home() {
  return (
    <section className="prose lg:prose-xl dark:prose-invert p-8">
      <h1>Hello, world!</h1>
      <p>This is a sample Next.js application with Tailwind CSS configured.</p>
      <p>That&apos;s how example code looks like in this app:</p>
      <pre>
        <code>console.log(&quot;Hello, world!&quot;);</code>
      </pre>
      <p>
        This application is styled with{" "}
        <a href="https://tailwindcss.com" className="text-blue-500">
          Tailwind CSS
        </a>
        , and uses{" "}
        <a href="https://nextjs.org" className="text-blue-500">
          Next.js
        </a>{" "}
        for server-side rendering and routing.
      </p>
      <p>
        A longer block of text with multiple lines is here. Text is also{" "}
        <strong>bold</strong>, <em>italic</em>, and <u>underlined</u>. Now some
        random text to fill the space and demonstrate how the layout looks with
        more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <Link href="/about" className="text-blue-500">
        Learn more about us
      </Link>
    </section>
  );
}
