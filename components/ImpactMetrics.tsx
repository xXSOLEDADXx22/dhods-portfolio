"use client";

import { useEffect, useRef, useState } from "react";

type ImpactMetric = {
    value: string;
    label: string;
};

type ImpactMetricsProps = {
    metrics: ImpactMetric[];
};

/*
 * Extracts the first number from values such as:
 * "10+" → 10
 * "4+"  → 4
 *
 * Values without numbers, such as "QA → Prod",
 * remain unchanged.
 */
function getNumericValue(value: string) {
    const match = value.match(/\d+/);

    return match ? Number(match[0]) : null;
}

/*
 * Replaces the numeric portion while preserving symbols:
 * "10+" becomes "0+", "1+", "2+" and so on.
 */
function formatValue(originalValue: string, currentValue: number) {
    return originalValue.replace(/\d+/, String(currentValue));
}

export default function ImpactMetrics({
                                          metrics,
                                      }: ImpactMetricsProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);

    const [displayedValues, setDisplayedValues] = useState(
        metrics.map((metric) => {
            const numericValue = getNumericValue(metric.value);

            return numericValue === null
                ? metric.value
                : formatValue(metric.value, 0);
        }),
    );

    useEffect(() => {
        const container = sectionRef.current;

        if (!container) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        /*
         * Visitors requesting reduced motion immediately
         * receive the final values.
         */
        if (prefersReducedMotion) {
            setDisplayedValues(
                metrics.map((metric) => metric.value),
            );

            return;
        }

        let animationFrameId: number | null = null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    !entry.isIntersecting ||
                    hasAnimatedRef.current
                ) {
                    return;
                }

                hasAnimatedRef.current = true;
                observer.disconnect();

                const duration = 1400;
                const startTime = performance.now();

                const animate = (currentTime: number) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(
                        elapsedTime / duration,
                        1,
                    );

                    /*
                     * Ease-out animation:
                     * starts quickly and finishes smoothly.
                     */
                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);

                    setDisplayedValues(
                        metrics.map((metric) => {
                            const maximumValue =
                                getNumericValue(metric.value);

                            if (maximumValue === null) {
                                return metric.value;
                            }

                            const currentValue = Math.round(
                                maximumValue * easedProgress,
                            );

                            return formatValue(
                                metric.value,
                                currentValue,
                            );
                        }),
                    );

                    if (progress < 1) {
                        animationFrameId =
                            window.requestAnimationFrame(animate);
                    }
                };

                animationFrameId =
                    window.requestAnimationFrame(animate);
            },
            {
                threshold: 0.35,
            },
        );

        observer.observe(container);

        return () => {
            observer.disconnect();

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [metrics]);

    return (
        <div
            ref={sectionRef}
            className="mx-auto grid max-w-xl grid-cols-3 gap-2 sm:gap-3 md:mx-0"
        >
            {metrics.map((metric, index) => (
                <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-white/[0.08] sm:px-4 sm:py-5"
                >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-pink-500/0 transition duration-300 group-hover:from-blue-500/10 group-hover:via-violet-500/10 group-hover:to-pink-500/10" />

                    {/* Animated value */}
                    <p
                        className="relative whitespace-nowrap bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-sm font-black tabular-nums text-transparent min-[400px]:text-base sm:text-2xl"
                        aria-label={`${metric.value} ${metric.label}`}
                    >
                        {displayedValues[index]}
                    </p>

                    {/* Metric label */}
                    <p className="relative mt-1 text-[9px] font-medium leading-tight text-slate-400 min-[400px]:text-[10px] sm:text-xs">
                        {metric.label}
                    </p>
                </div>
            ))}
        </div>
    );
}