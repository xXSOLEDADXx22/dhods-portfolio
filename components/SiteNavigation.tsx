"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Delivered", href: "#delivered" },
    { name: "Recommendations", href: "#recommendations" },
    { name: "Commitments", href: "#commitments" },
    { name: "Contact", href: "#contact" },
];

export default function SiteNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#060610]/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <a
                    href="#"
                    onClick={closeMenu}
                    className="text-xl font-extrabold tracking-tight text-white"
                >
                    Dhods
                    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            .
          </span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-5 text-sm font-medium text-slate-300 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="transition hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-5 py-2.5 font-semibold text-white transition hover:scale-105"
                    >
                        Let&apos;s Connect
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((current) => !current)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile navigation */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-[#0c0c18]/95 px-4 py-5 backdrop-blur-xl md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-4 py-3 text-center font-semibold text-white"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}