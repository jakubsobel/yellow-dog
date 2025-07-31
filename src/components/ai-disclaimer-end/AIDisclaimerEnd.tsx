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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z"
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
