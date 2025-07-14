import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import data from "web-features/data.json" with { type: "json" };
const { browsers, features /*, groups, snapshots*/ } = data;

import baselineLimited from "./images/baseline/baseline-limited-icon.png";
import baselineNewly from "./images/baseline/baseline-newly-icon.png";
import baselineWidely from "./images/baseline/baseline-widely-icon.png";

import browserChrome from "./images/browsers/chrome_logo.png";
import browserFirefox from "./images/browsers/firefox_logo.png";
import browserSafari from "./images/browsers/safari_logo.png";

export default function WebFeatures() {
  const backgroundClipFeature = features["a"];

  const mobileIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 1 12 18"
      fill="currentColor"
      className="w-2 rounded-sm bg-white opacity-80 shadow-sm"
    >
      <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
      <path
        fillRule="evenodd"
        d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // const unsupportedIcon = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 20 20"
  //     fill="currentColor"
  //     className="size-5"
  //   >
  //     <path
  //       fillRule="evenodd"
  //       d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
  //       clipRule="evenodd"
  //     />
  //   </svg>
  // );

  const supportedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-4 text-emerald-700"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const browserIconMap: Record<keyof typeof browsers, JSX.Element> = {
    chrome: <Image className="w-4" src={browserChrome} alt="Chrome" />,
    firefox: <Image className="w-4" src={browserFirefox} alt="Firefox" />,
    safari: <Image className="w-4" src={browserSafari} alt="Safari" />,
    edge: <Image className="w-4" src={browserChrome} alt="Edge" />,
    chrome_android: (
      <span className="relative flex items-center gap-1">
        <Image className="w-4" src={browserChrome} alt="Chrome Android" />
        <div className="absolute right-[-2px] bottom-[-2px]">{mobileIcon}</div>
      </span>
    ),
    firefox_android: (
      <span className="relative flex items-center gap-1">
        <Image className="w-4" src={browserFirefox} alt="Firefox Android" />
        <div className="absolute right-[-2px] bottom-[-2px]">{mobileIcon}</div>
      </span>
    ),
    safari_ios: (
      <span className="relative flex items-center gap-1">
        <Image className="w-4" src={browserSafari} alt="Safari iOS" />
        <div className="absolute right-[-2px] bottom-[-2px]">{mobileIcon}</div>
      </span>
    ),
  };

  return (
    <section className="flex justify-between gap-12 p-8 lg:gap-8">
      <article className="lg:prose-xl prose">
        {" "}
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
          <code>{JSON.stringify(backgroundClipFeature, null, 2)}</code>
        </pre>{" "}
        <Link href="/" className="text-blue-500">
          Go back to home
        </Link>
      </article>
      <aside className="hidden flex-col gap-6 lg:flex">
        <div className="flex w-64 flex-col gap-1 rounded-2xl bg-emerald-50 p-4">
          <Image
            src={baselineWidely}
            alt="Baseline widely available"
            className="w-24"
          />
          <strong>Baseline</strong> Widely available
          {backgroundClipFeature.status.baseline_high_date && (
            <time
              className="text-gray-500"
              dateTime={backgroundClipFeature.status.baseline_high_date}
            >
              Became baseline on{" "}
              {new Date(
                backgroundClipFeature.status.baseline_high_date,
              ).toLocaleDateString()}
            </time>
          )}
          <details className="flex flex-col gap-2" open>
            <summary className="select-none">Browsers</summary>
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-2">
              {Object.entries(backgroundClipFeature.status.support).map(
                ([browser, version]) => (
                  <div
                    key={browser}
                    className="col-span-4 grid grid-cols-subgrid items-center text-xs"
                  >
                    {browserIconMap[browser as keyof typeof browserIconMap]}
                    <div className="flex flex-1 flex-col">
                      <span className="text-xs font-semibold">
                        {browsers[browser as keyof typeof browsers].name}
                      </span>
                      <span className="text-[0.6rem] text-gray-500">
                        Version {version}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {supportedIcon}
                      <div className="text-[0.6rem] font-light">
                        {(() => {
                          const release = browsers[
                            browser as keyof typeof browsers
                          ].releases.find((r) => r.version === version);
                          if (!release?.date) return "unknown";
                          const releaseDate = new Date(release.date);
                          // Use Intl.RelativeTimeFormat if available
                          const now = new Date();
                          const diffMs = now.getTime() - releaseDate.getTime();
                          const diffDays = Math.floor(
                            diffMs / (1000 * 60 * 60 * 24),
                          );
                          const rtf =
                            typeof Intl !== "undefined" &&
                            Intl.RelativeTimeFormat
                              ? new Intl.RelativeTimeFormat("en", {
                                  numeric: "auto",
                                })
                              : null;
                          if (diffDays >= 365) {
                            const years = Math.floor(diffDays / 365);
                            return rtf
                              ? rtf.format(-years, "year")
                              : `${years} year${years > 1 ? "s" : ""} ago`;
                          }
                          if (diffDays >= 30) {
                            const months = Math.floor(diffDays / 30);
                            return rtf
                              ? rtf.format(-months, "month")
                              : `${months} month${months > 1 ? "s" : ""} ago`;
                          }
                          if (diffDays > 0) {
                            return rtf
                              ? rtf.format(-diffDays, "day")
                              : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
                          }
                          return "today";
                        })()}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </details>
        </div>
        <div className="flex w-64 flex-col gap-1 rounded-2xl bg-blue-50 p-4">
          <Image
            src={baselineNewly}
            alt="Baseline newly available"
            className="w-24"
          />
          <strong>Baseline</strong> Newly available
          {backgroundClipFeature.status.baseline_low_date && (
            <time
              className="text-gray-500"
              dateTime={backgroundClipFeature.status.baseline_low_date}
            >
              Became baseline on{" "}
              {new Date(
                backgroundClipFeature.status.baseline_low_date,
              ).toLocaleDateString()}
            </time>
          )}
        </div>
        <div className="flex w-64 flex-col gap-1 rounded-2xl bg-amber-50 p-4">
          <Image
            src={baselineLimited}
            alt="Baseline limited available"
            className="w-24"
          />
          Limited availability
        </div>
        <div className="flex w-64 flex-col gap-1 rounded-2xl bg-gray-50 p-4">
          <h3 className="text-lg font-semibold">Browser Support</h3>
        </div>
      </aside>
    </section>
  );
}
