export function AIDisclaimer() {
  return (
    <div className="not-prose my-8 flex items-start gap-3 rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-50 p-4 lg:text-base dark:border-yellow-600 dark:bg-yellow-900/20">
      <svg
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
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
        <h2 className="mb-1 font-medium text-yellow-800 dark:text-yellow-200">
          AI-Generated Content Disclaimer
        </h2>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          This content was generated with the help of AI. While it aims to
          provide accurate and helpful information, it has not been thoroughly
          reviewed by a human. Please use your judgment or consult an expert if
          needed.
        </p>
      </div>
    </div>
  );
}
