"use client";

import { useEffect, useState } from "react";

// TODO: make it reusable, pass icons and values as props
export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<
    "light" | "system" | "dark"
  >("system");

  useEffect(() => {
    setMounted(true);

    // Check localStorage for saved theme preference
    // Default to "system" if no preference is found
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "system"
      | "dark";

    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", selectedTheme);

    if (
      selectedTheme === "dark" ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [selectedTheme, mounted]);

  const themes = [
    {
      value: "light" as const,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      value: "system" as const,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      value: "dark" as const,
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ),
    },
  ];

  const getSelectedIndex = () =>
    themes.findIndex((theme) => theme.value === selectedTheme);

  return (
    <fieldset className="relative flex w-max items-center rounded-2xl border-1 border-gray-300 bg-white p-1 shadow-xs shadow-gray-100 [--switch-size:_calc(var(--spacing)_*_8)] dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-700">
      {/* Animated background dot */}
      {mounted && (
        <div
          className="absolute z-0 h-8 w-8 rounded-xl bg-blue-500 transition-transform duration-300 ease-out dark:bg-blue-600"
          style={{
            transform: `translateX(calc(${getSelectedIndex()} * var(--switch-size)))`,
          }}
        />
      )}

      {themes.map((theme) => (
        <label key={theme.value} className="relative z-10 cursor-pointer">
          <input
            type="radio"
            value={theme.value}
            name="theme"
            checked={selectedTheme === theme.value}
            onChange={(e) =>
              setSelectedTheme(e.target.value as typeof selectedTheme)
            }
            className="sr-only"
          />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors duration-200 ${
              selectedTheme === theme.value && mounted
                ? "text-white"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            } `}
          >
            {theme.icon}
          </div>
        </label>
      ))}
    </fieldset>
  );
}
