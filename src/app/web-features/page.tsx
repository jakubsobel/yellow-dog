import Link from "next/link";

import data from "web-features/data.json" with { type: "json" };
const { browsers, features /*, groups, snapshots*/ } = data;

export default function WebFeatures() {
  const backgroundClipFeature = features["background-clip"];

  return (
    <section className="lg:prose-xl prose p-8">
      <h1>Web Features</h1>

      <h2>background-clip</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: backgroundClipFeature.description_html,
        }}
      ></p>

      <h3>Support</h3>

      <table className="w-full">
        <thead>
          <tr>
            <th>Browser</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(backgroundClipFeature.status.support).map(
            ([browser, version]) => (
              <tr key={browser}>
                <td>{browsers[browser as keyof typeof browsers].name}</td>
                <td>{version}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>

      <time
        className="text-gray-500"
        dateTime={backgroundClipFeature.status.baseline_high_date}
      >
        Became baseline on{" "}
        {new Date(
          backgroundClipFeature.status.baseline_high_date,
        ).toLocaleDateString()}
      </time>

      <pre className="break-words whitespace-pre-wrap">
        <code>{JSON.stringify(features["background-clip"], null, 2)}</code>
      </pre>

      <Link href="/" className="text-blue-500">
        Go back to home
      </Link>
    </section>
  );
}
