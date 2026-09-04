"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        function handleScroll() {
            /*
             * Show the down indicator near the top.
             * Switch to the up button after scrolling 400px.
             */
            setShowBackToTop(window.scrollY > 400);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function scrollDown() {
        const aboutSection = document.getElementById("about");

        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            return;
        }

        window.scrollBy({
            top: window.innerHeight * 0.85,
            behavior: "smooth",
        });
    }

    return (
        <div className="fixed bottom-6 right-4 z-50 sm:bottom-8 sm:right-8">
            {showBackToTop ? (
                /*
                 * Appears after the visitor scrolls down.
                 */
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    title="Back to top"
                    className="floating-scroll-control floating-scroll-enter group"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5"
                    >
                        <path
                            d="M6 14l6-6 6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="sr-only">Back to top</span>
                </button>
            ) : (
                /*
                 * Visible while the visitor is at the top.
                 */
                <button
                    type="button"
                    onClick={scrollDown}
                    aria-label="Scroll down to learn more"
                    title="Scroll down"
                    className="floating-scroll-control floating-scroll-enter group"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="floating-down-arrow h-5 w-5"
                    >
                        <path
                            d="M6 10l6 6 6-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="floating-scroll-ring absolute inset-1 rounded-full" />

                    <span className="sr-only">
            Scroll down to learn more
          </span>
                </button>
            )}
        </div>
    );
}