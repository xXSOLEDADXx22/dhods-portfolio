"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { portfolio } from "@/data/portfolio";

export default function LogoMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    const hoveredRef = useRef(false);
    const draggingRef = useRef(false);
    const startingXRef = useRef(0);
    const startingScrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) {
            return;
        }

        const motionPreference = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        let previousTime = performance.now();
        let scrollPosition = container.scrollLeft;

        function animate(currentTime: number) {
            if (!container || !track) {
                return;
            }

            const elapsedTime = Math.min(currentTime - previousTime, 50);
            previousTime = currentTime;

            if (
                !hoveredRef.current &&
                !draggingRef.current &&
                !motionPreference.matches
            ) {
                const speed = 50;

                // Distance between the first logo and its repeated copy.
                const firstLogo = track.children[0] as HTMLElement | undefined;
                const repeatedLogo = track.children[
                    portfolio.products.length
                    ] as HTMLElement | undefined;

                const loopWidth =
                    firstLogo && repeatedLogo
                        ? repeatedLogo.offsetLeft - firstLogo.offsetLeft
                        : 0;

                const maximumScroll =
                    container.scrollWidth - container.clientWidth;

                scrollPosition += (speed * elapsedTime) / 1000;

                if (
                    loopWidth > 0 &&
                    maximumScroll >= loopWidth &&
                    scrollPosition >= loopWidth
                ) {
                    scrollPosition -= loopWidth;
                } else if (scrollPosition >= maximumScroll) {
                    scrollPosition = 0;
                }

                container.scrollLeft = scrollPosition;
            } else {
                scrollPosition = container.scrollLeft;
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
        const container = containerRef.current;

        if (!container || !event.isPrimary || event.button !== 0) {
            return;
        }

        draggingRef.current = true;
        startingXRef.current = event.clientX;
        startingScrollRef.current = container.scrollLeft;

        container.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        const container = containerRef.current;

        if (!container || !draggingRef.current) {
            return;
        }

        const distanceMoved = event.clientX - startingXRef.current;

        container.scrollLeft = startingScrollRef.current - distanceMoved;
    }

    function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
        const container = containerRef.current;

        draggingRef.current = false;

        if (container?.hasPointerCapture(event.pointerId)) {
            container.releasePointerCapture(event.pointerId);
        }
    }

    return (
        <section
            id="delivered"
            className="scroll-mt-20 overflow-hidden bg-[#060610] px-4 py-10 sm:px-6 sm:py-12"
        >
            {/* Compact section heading */}
            <div className="mx-auto mb-5 max-w-6xl text-center sm:mb-6">
                <p className="section-label">
                    Brands I&apos;ve Delivered Quality
                </p>

                <h2 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
                    Where I&apos;ve made an impact
                </h2>
            </div>

            <div className="relative">
                {/* Edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#060610] to-transparent sm:w-16" />

                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#060610] to-transparent sm:w-16" />

                <div
                    ref={containerRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onLostPointerCapture={() => {
                        draggingRef.current = false;
                    }}
                    onPointerEnter={(event) => {
                        if (event.pointerType === "mouse") {
                            hoveredRef.current = true;
                        }
                    }}
                    onPointerLeave={(event) => {
                        if (event.pointerType === "mouse") {
                            hoveredRef.current = false;
                        }
                    }}
                    className="hide-scrollbar cursor-grab select-none overflow-x-auto active:cursor-grabbing"
                    style={{ touchAction: "pan-y" }}
                    role="region"
                    aria-label="Brands and products"
                >
                    {/* Smaller gaps and logo containers */}
                    <div
                        ref={trackRef}
                        className="relative flex w-max items-center gap-4 py-3 sm:gap-6"
                    >
                        {[...portfolio.products, ...portfolio.products].map(
                            (product, index) => (
                                <div
                                    key={`${product.companyName}-${index}`}
                                    aria-hidden={
                                        index >= portfolio.products.length ? true : undefined
                                    }
                                    className="flex h-24 w-40 shrink-0 items-center justify-center sm:h-28 sm:w-52"
                                >
                                    {product.companyLogo ? (
                                        <img
                                            src={product.companyLogo}
                                            alt={`${product.companyName} logo`}
                                            title={product.companyName}
                                            draggable={false}
                                            className="h-16 w-36 object-contain transition-transform duration-300 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none sm:h-20 sm:w-48"
                                        />
                                    ) : (
                                        <span className="px-2 text-center text-lg font-bold text-slate-300">
                      {product.companyName}
                    </span>
                                    )}
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}