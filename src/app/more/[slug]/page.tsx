import Link from "next/link";
import { notFound } from "next/navigation";

import data from "web-features/data.json" with { type: "json" };
const { features } = data;

interface PageProps {
  params: Promise<{
    slug: keyof typeof features;
  }>;
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;

  // Find the feature by slug
  const feature = features[slug];

  // If feature doesn't exist, show 404
  if (!feature) {
    notFound();
  }

  let MdxDescription = null;
  try {
    const markdownModule = await import(`@/markdown/${slug}.mdx`);
    MdxDescription = markdownModule.default;
  } catch (_error) {
    // MDX file doesn't exist, that's okay
    console.log(`No MDX file found for ${slug}`);
  }

  return (
    <section className="prose lg:prose-xl dark:prose-invert p-8">
      <h1>{feature.name}</h1>

      {feature.description_html && (
        <div
          className="italic"
          dangerouslySetInnerHTML={{
            __html: feature.description_html,
          }}
        />
      )}

      {MdxDescription && <MdxDescription />}

      {feature.status && (
        <div>
          <h2>Browser Support</h2>
          <ul>
            {Object.entries(feature.status.support).map(
              ([browser, version]) => (
                <li key={browser}>
                  <strong>{browser}:</strong> {version}
                </li>
              ),
            )}
          </ul>
        </div>
      )}

      <Link href="/" className="text-blue-500">
        ← Back to home
      </Link>
    </section>
  );
}

// Generate static params for all features (optional, for better performance)
export function generateStaticParams() {
  return Object.keys(features).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const feature = features[slug];

  if (!feature) {
    return {
      title: "Feature Not Found",
    };
  }

  return {
    title: `${feature.name} - Yellow Dog`,
    description: feature.description_html
      ? feature.description_html.replace(/<[^>]*>/g, "").substring(0, 160)
      : `Learn about ${feature.name} web feature`,
  };
}

export const dynamicParams = false;
