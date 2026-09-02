"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import { portfolio } from "@/data/portfolio";

export default function LogoMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    const pausedRef = useRef(false);
    const draggingRef = useRef(false);

    const startingXRef = useRef(0);
    const startingScrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        let previousTime = performance.now();

        function animate(currentTime: number) {
            if (!container) {
                return;
            }

            const elapsedTime = currentTime - previousTime;
            previousTime = currentTime;

            if (!pausedRef.current && !draggingRef.current) {
                // Change to adjust automatic speed
                const speed = 50;

                container.scrollLeft += (speed * elapsedTime) / 1000;

                const halfwayPoint = container.scrollWidth / 2;

                if (container.scrollLeft >= halfwayPoint) {
                    container.scrollLeft -= halfwayPoint;
                }
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

    function handlePointerDown(
        event: React.PointerEvent<HTMLDivElement>,
    ) {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        draggingRef.current = true;
        pausedRef.current = true;

        startingXRef.current = event.clientX;
        startingScrollRef.current = container.scrollLeft;

        container.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(
        event: React.PointerEvent<HTMLDivElement>,
    ) {
        const container = containerRef.current;

        if (!container || !draggingRef.current) {
            return;
        }

        const distanceMoved = event.clientX - startingXRef.current;

        container.scrollLeft =
            startingScrollRef.current - distanceMoved;
    }

    function handlePointerUp(
        event: React.PointerEvent<HTMLDivElement>,
    ) {
        const container = containerRef.current;

        draggingRef.current = false;

        if (container?.hasPointerCapture(event.pointerId)) {
            container.releasePointerCapture(event.pointerId);
        }
    }

    function handleMouseEnter() {
        pausedRef.current = true;
    }

    function handleMouseLeave() {
        pausedRef.current = false;
        draggingRef.current = false;
    }

    function handleTouchEnd() {
        draggingRef.current = false;
        pausedRef.current = false;
    }

    return (
        <section
            id="delivered"
            className="scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6"
        >
            <div className="mx-auto mb-12 max-w-6xl text-center">
                <p className="section-label">
                    Brands I&apos;ve Delivered quality
                </p>

                <h2 className="section-heading">
                    {/*Brands where I&apos;ve made an impact*/}
                </h2>

                <p className="mx-auto max-w-2xl text-sm text-slate-400">

                </p>
            </div>

            <div className="relative">
                {/* Left fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#060610] to-transparent sm:w-24" />

                {/* Right fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#060610] to-transparent sm:w-24" />

                <div
                    ref={containerRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchEnd={handleTouchEnd}
                    className="hide-scrollbar cursor-grab select-none overflow-x-scroll active:cursor-grabbing"
                    style={{
                        touchAction: "pan-y",
                    }}
                >
                    <div className="flex w-max items-center gap-12 py-5 sm:gap-20">
                        {[...portfolio.products, ...portfolio.products].map(
                            (product, index) => (
                                <div
                                    key={`${product.companyName}-${index}`}
                                    className="flex h-28 w-52 shrink-0 items-center justify-center sm:h-36 sm:w-72"
                                >
                                    {product.companyLogo ? (
                                        <img
                                            src={product.companyLogo}
                                            alt={`${product.companyName} logo`}
                                            title={product.companyName}
                                            draggable={false}
                                            className="pointer-events-auto h-20 w-44 object-contain transition duration-300 hover:scale-110 sm:h-28 sm:w-64"
                                        />
                                    ) : (
                                        <span className="text-center text-xl font-bold text-slate-300">
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