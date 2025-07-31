export function AIDisclaimerEnd() {
  return (
    <div className="not-prose my-8 flex items-start gap-3 rounded-lg border-2 border-dashed border-emerald-300 bg-emerald-50 p-4 lg:text-base dark:border-emerald-600 dark:bg-emerald-900/20">
      <svg
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div className="flex-1">
        <h2 className="mb-1 font-medium text-emerald-800 dark:text-emerald-200">
          End of AI-Generated Content
        </h2>
        <p className="text-sm text-emerald-700 dark:text-emerald-300">
          This is the end of AI-generated content. All content below has been
          written and reviewed by a human.
        </p>
      </div>
    </div>
  );
}
