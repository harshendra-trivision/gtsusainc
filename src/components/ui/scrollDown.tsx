"use client";

import { ArrowDown } from "lucide-react";

// Top-level page sections (nested <section>s are skipped so each click moves one full section).
function getSections() {
    return Array.from(document.querySelectorAll<HTMLElement>("main section, body > footer")).filter(
        (el) => !el.parentElement?.closest("section") && el.offsetHeight > 0
    );
}

export default function ScrollDownButton() {
    const scrollToNextSection = () => {
        const next = getSections().find((el) => el.getBoundingClientRect().top > 8);

        if (next) {
            // Scroll to the exact top; scrollIntoView would honour scroll-mt-* and stop short, re-selecting the same section.
            window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
        } else {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToNextSection}
            aria-label="Go to next section"
            className="
        group fixed bottom-6 left-6 z-50
        flex h-12 w-12 items-center justify-center
        overflow-hidden rounded-full border border-purple-200/60
        bg-gradient-to-br from-purple-200 via-fuchsia-100 to-white
        text-purple-700 shadow-[0_0_0_4px_rgba(180,160,255,0.25)]
        backdrop-blur-md transition-all duration-300 ease-out
        hover:w-36 hover:rounded-full hover:shadow-[0_12px_35px_rgba(122,24,229,0.28)]
        active:scale-95
      "
        >
            <ArrowDown
                size={18}
                strokeWidth={3}
                className="
          absolute transition-all duration-300 ease-out
          group-hover:translate-y-10 group-hover:opacity-0
        "
            />

            <span
                className="
          absolute -translate-y-8 text-sm font-semibold opacity-0
          transition-all duration-300 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
        "
            >
                Go Down
            </span>
        </button>
    );
}
