"use client";

import { useEffect, useState } from "react";

const navigationLinks = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Delivered",
        href: "#delivered",
    },
    {
        label: "Endorsements",
        href: "#endorsements",
    },
    {
        label: "Commitments",
        href: "#commitments",
    },
];

export default function SiteNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    /*
     * Close the menu using Escape and prevent the
     * background page from scrolling while it is open.
     */
    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <>
            {/* Main navigation bar */}
            <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#060610]/80 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        aria-label="Go to the top of the page"
                        className="relative z-[70] text-xl font-black tracking-tight text-white"
                    >
                        Dhods
                        <span className="text-pink-400">.</span>
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-7 md:flex">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group relative py-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                            >
                                {link.label}

                                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        ))}

                        {/* Primary desktop action */}
                        <a
                            href="#contact"
                            className="connect-ring inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-6 text-sm font-bold leading-none text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>

                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl transition hover:border-violet-400/60 hover:bg-white/10 md:hidden"
                    >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
                    </button>
                </div>
            </nav>

            {/* Mobile navigation overlay */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="mobile-menu-backdrop fixed inset-0 z-[100] bg-[#020208]/65 p-4 backdrop-blur-lg md:hidden"
                    role="presentation"
                    onClick={closeMenu}
                >
                    {/* Decorative background lights */}
                    <div className="pointer-events-none absolute left-[-5rem] top-1/3 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-20 right-[-5rem] h-56 w-56 rounded-full bg-pink-500/15 blur-3xl" />

                    {/* Floating glass drawer */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="mobile-menu-panel relative ml-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-[#0d0d19]/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Drawer glow */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl" />

                        {/* Mobile menu header */}
                        <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                            <a
                                href="#home"
                                onClick={closeMenu}
                                className="text-xl font-black tracking-tight text-white"
                            >
                                Dhods
                                <span className="text-pink-400">.</span>
                            </a>

                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Close navigation menu"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-2xl leading-none text-slate-300 transition hover:rotate-90 hover:border-pink-400/70 hover:bg-white/10 hover:text-white"
                            >
                                ×
                            </button>
                        </div>

                        {/* Navigation label */}
                        <p className="relative mb-3 mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                            Navigation
                        </p>

                        {/* Mobile links */}
                        <div className="relative flex flex-col gap-2">
                            {navigationLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    style={{
                                        animationDelay: `${100 + index * 70}ms`,
                                    }}
                                    className="mobile-menu-item group flex min-h-12 items-center justify-between rounded-xl border border-transparent px-4 py-3 font-semibold text-slate-300 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white focus-visible:border-violet-400 focus-visible:outline-none"
                                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition group-hover:bg-violet-400 group-hover:shadow-[0_0_8px_rgba(167,139,250,0.8)]" />

                      {link.label}
                  </span>

                                    <span className="translate-x-[-4px] text-violet-400 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                                </a>
                            ))}
                        </div>

                        {/* Primary mobile action */}
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="connect-ring mobile-menu-item relative mt-5 block w-full rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-5 py-3.5 text-center font-bold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
                            style={{
                                animationDelay: "380ms",
                            }}
                        >
                            Let&apos;s Connect
                        </a>

                        {/* Menu footer */}
                        <p className="relative mt-5 border-t border-white/10 pt-4 text-center text-[10px] uppercase tracking-[0.18em] text-slate-600">
                            Quality in every delivery
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}