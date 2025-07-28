"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

// TODO: make it reusable, pass icons and values as props
export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<
    "light" | "system" | "dark"
  >("system");
  const ref = useRef<HTMLDivElement>(null);

  // This effect runs once on mount to check localStorage for a saved theme preference
  // and sets the initial state accordingly.
  // It also sets the mounted state to true, which is used to conditionally render the
  // animated background dot only after the component has mounted.
  // This prevents hydration mismatches between server-rendered and client-rendered content.
  useEffect(() => {
    setMounted(true);

    // Check localStorage for saved theme preference
    // Default to "system" if no preference is found
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "system"
      | "dark";

    // If a theme is stored, set it as the selected theme
    // Otherwise, default to "system" (as defined in state initialization)
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  // This effect runs whenever the selectedTheme state changes.
  // It saves the selected theme to localStorage and applies the theme to the document.
  // If the selected theme is "dark" or "system" and the user's system preference is dark,
  // it sets a data attribute on the document element to apply the dark theme.
  // Otherwise, it removes the data attribute to apply the light theme.
  useEffect(() => {
    // Save the selected theme to localStorage
    localStorage.setItem("theme", selectedTheme);

    // Apply the theme to the document
    if (
      selectedTheme === "dark" ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [selectedTheme]);

  // This function handles the theme switch when a radio button is clicked.
  // It uses `document.startViewTransition` to animate the transition between themes.
  // The `flushSync` function ensures that the state update is processed immediately,
  // allowing the transition to be smooth and visually appealing.
  const handleSwitch = async (theme: "light" | "system" | "dark") => {
    // If the selected theme is already the current theme, do nothing
    if (selectedTheme === theme) return;

    // Return early if View Transition API is not supported or user prefers reduced motion
    // Also if new theme will not cause visual change, do nothing
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        theme === "dark") ||
      (selectedTheme === "dark" &&
        theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: light)").matches &&
        theme === "light") ||
      (selectedTheme === "light" &&
        theme === "system" &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      setSelectedTheme(theme);

      return;
    }

    await document.startViewTransition({
      update: () => {
        flushSync(() => {
          setSelectedTheme(theme);
        });
      },
      // `types` is used to scope transitions using `:active-view-transition-type()`
      types: ["theme-switch"],
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

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
    <fieldset className="relative flex w-max items-center rounded-2xl border-1 border-slate-300 bg-white p-1 shadow-xs shadow-slate-200 [--switch-size:_calc(var(--spacing)_*_8)] dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950">
      {/* Animated background dot */}
      {mounted && (
        <div
          ref={ref}
          className="absolute z-0 h-8 w-8 rounded-xl bg-blue-500 opacity-100 [transition:transform_0.3s_ease-out,opacity_0.2s] [view-transition-name:theme-thumb] dark:bg-blue-600 starting:opacity-0"
          style={{
            transform: `translateX(calc(${getSelectedIndex()} * var(--switch-size)))`,
          }}
        />
      )}

      {themes.map((theme, index) => (
        <label
          key={theme.value}
          style={{
            viewTransitionName: `theme-label-${index}`,
            /* @ts-expect-error: well viewTransitionClass exists, you know... */
            viewTransitionClass: "theme-label",
          }}
          className={`relative z-10 cursor-pointer`}
        >
          <input
            type="radio"
            value={theme.value}
            name="theme"
            checked={selectedTheme === theme.value}
            onChange={(e) =>
              handleSwitch(e.target.value as typeof selectedTheme)
            }
            className="sr-only"
          />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors duration-200 ${
              selectedTheme === theme.value && mounted
                ? "text-white"
                : "text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            } `}
          >
            {theme.icon}
          </div>
        </label>
      ))}
    </fieldset>
  );
}
