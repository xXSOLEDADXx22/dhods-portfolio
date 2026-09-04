/* eslint-disable @next/next/no-img-element */

"use client";

import {
    PointerEvent as ReactPointerEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";

type Recommendation = {
    name: string;
    position: string;
    company: string;
    relationship: string;
    photo: string;
    recommendation: string;
    linkedInUrl?: string;
};

type RecommendationCarouselProps = {
    recommendations: Recommendation[];
};

/*
 * Automatic scrolling configuration.
 *
 * AUTO_SCROLL_AMOUNT:
 * 1 = smooth and gentle
 * 2 = medium
 * 3 = fast
 *
 * AUTO_SCROLL_INTERVAL:
 * Lower number = faster
 * Higher number = slower
 */
const AUTO_SCROLL_AMOUNT = 1;
const AUTO_SCROLL_INTERVAL = 30;

/*
 * Multiple copies ensure that the carousel remains
 * scrollable even on wide screens.
 */
const NUMBER_OF_COPIES = 8;

export default function RecommendationCarousel({
                                                   recommendations,
                                               }: RecommendationCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const pausedRef = useRef(false);
    const hoveredRef = useRef(false);
    const draggingRef = useRef(false);
    const suppressClickRef = useRef(false);

    const dragStartXRef = useRef(0);
    const dragStartScrollLeftRef = useRef(0);

    const [selectedRecommendation, setSelectedRecommendation] =
        useState<Recommendation | null>(null);

    const [isReady, setIsReady] = useState(false);

    /*
     * Create multiple copies for continuous scrolling.
     */
    const repeatedRecommendations = Array.from(
        { length: NUMBER_OF_COPIES },
        () => recommendations,
    ).flat();

    /*
     * Initialize and automatically scroll in the reverse
     * direction of the Delivered carousel.
     */
    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container || recommendations.length === 0) {
            return;
        }

        let intervalId: number;
        let startTimerId: number;

        const initializeCarousel = () => {
            const copyWidth =
                container.scrollWidth / NUMBER_OF_COPIES;

            /*
             * Begin near the middle so the carousel has enough
             * content on both the left and right sides.
             */
            container.scrollLeft = copyWidth * 4;

            setIsReady(true);

            intervalId = window.setInterval(() => {
                if (
                    pausedRef.current ||
                    draggingRef.current
                ) {
                    return;
                }

                /*
                 * Subtracting scrollLeft creates the reverse movement.
                 */
                container.scrollLeft -= AUTO_SCROLL_AMOUNT;

                const currentCopyWidth =
                    container.scrollWidth / NUMBER_OF_COPIES;

                /*
                 * Jump forward by two identical copies.
                 * Because the content is duplicated, the reset
                 * should not be visually noticeable.
                 */
                if (
                    container.scrollLeft <=
                    currentCopyWidth * 2
                ) {
                    container.scrollLeft +=
                        currentCopyWidth * 2;
                }
            }, AUTO_SCROLL_INTERVAL);
        };

        /*
         * Give the browser enough time to calculate the
         * complete width of the cards.
         */
        startTimerId = window.setTimeout(
            initializeCarousel,
            400,
        );

        return () => {
            window.clearTimeout(startTimerId);

            if (intervalId) {
                window.clearInterval(intervalId);
            }
        };
    }, [recommendations.length]);

    /*
     * Reposition the carousel when the window changes size.
     */
    useEffect(() => {
        const handleResize = () => {
            const container = scrollContainerRef.current;

            if (!container) {
                return;
            }

            const copyWidth =
                container.scrollWidth / NUMBER_OF_COPIES;

            container.scrollLeft = copyWidth * 4;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener(
                "resize",
                handleResize,
            );
        };
    }, []);

    /*
     * Pause when the mouse enters the carousel.
     */
    function handleMouseEnter() {
        hoveredRef.current = true;
        pausedRef.current = true;
    }

    /*
     * Resume when the mouse leaves, unless the modal is open.
     */
    function handleMouseLeave() {
        hoveredRef.current = false;

        if (
            !selectedRecommendation &&
            !draggingRef.current
        ) {
            pausedRef.current = false;
        }
    }

    /*
     * Begin dragging with the mouse or finger.
     */
    function handlePointerDown(
        event: ReactPointerEvent<HTMLDivElement>,
    ) {
        const container = scrollContainerRef.current;

        /*
         * Ignore non-primary mouse buttons.
         * Touch events normally use button 0.
         */
        if (!container || event.button !== 0) {
            return;
        }

        draggingRef.current = true;
        suppressClickRef.current = false;
        pausedRef.current = true;

        dragStartXRef.current = event.clientX;
        dragStartScrollLeftRef.current =
            container.scrollLeft;
    }

    /*
     * Scroll horizontally during dragging.
     */
    function handlePointerMove(
        event: ReactPointerEvent<HTMLDivElement>,
    ) {
        const container = scrollContainerRef.current;

        if (
            !container ||
            !draggingRef.current
        ) {
            return;
        }

        const distance =
            event.clientX - dragStartXRef.current;

        /*
         * Movement beyond 7 pixels counts as dragging.
         */
        if (Math.abs(distance) > 7) {
            suppressClickRef.current = true;
        }

        container.scrollLeft =
            dragStartScrollLeftRef.current - distance;
    }

    /*
     * Finish dragging.
     */
    function handlePointerUp() {
        draggingRef.current = false;

        /*
         * Continue pausing if the mouse remains over the row.
         */
        pausedRef.current =
            hoveredRef.current ||
            selectedRecommendation !== null;

        /*
         * Wait until the click event has completed before
         * clearing the drag protection.
         */
        window.setTimeout(() => {
            suppressClickRef.current = false;
        }, 50);
    }

    /*
     * Open the full recommendation unless the user dragged.
     */
    function openRecommendation(
        item: Recommendation,
    ) {
        if (suppressClickRef.current) {
            return;
        }

        pausedRef.current = true;
        setSelectedRecommendation(item);
    }

    /*
     * Close the recommendation.
     */
    function closeRecommendation() {
        setSelectedRecommendation(null);

        pausedRef.current = hoveredRef.current;
    }

    /*
     * Close using Escape and stop the background
     * from scrolling while the modal is displayed.
     */
    useEffect(() => {
        if (!selectedRecommendation) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {
            if (event.key === "Escape") {
                setSelectedRecommendation(null);
                pausedRef.current =
                    hoveredRef.current;
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {
            document.body.style.overflow =
                previousOverflow;

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [selectedRecommendation]);

    if (recommendations.length === 0) {
        return null;
    }

    return (
        <>
            {/* Automatically moving recommendation profiles */}
            <div
                ref={scrollContainerRef}
                className={`hide-scrollbar select-none overflow-x-scroll transition-opacity duration-300 ${
                    isReady ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    touchAction: "pan-y",
                    cursor: draggingRef.current
                        ? "grabbing"
                        : "grab",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                <div className="flex w-max items-stretch gap-5 px-4 py-5 sm:gap-6 sm:px-6">
                    {repeatedRecommendations.map(
                        (item, index) => (
                            <button
                                key={`${item.name}-${item.company}-${index}`}
                                type="button"
                                onClick={() =>
                                    openRecommendation(item)
                                }
                                aria-label={`Read recommendation from ${item.name}`}
                                className="group relative w-60 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-violet-400/70 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:w-72"
                            >
                                {/* Decorative glow */}
                                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-pink-500/20 blur-2xl transition duration-300 group-hover:scale-150" />

                                {/* Profile details */}
                                <div className="relative flex items-center gap-4">
                                    <img
                                        src={item.photo}
                                        alt={`${item.name} profile photo`}
                                        draggable={false}
                                        className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-violet-400/50 transition duration-300 group-hover:scale-105 group-hover:ring-pink-400"
                                    />

                                    <div className="min-w-0">
                                        <h3 className="truncate font-bold text-white">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 line-clamp-2 text-sm text-slate-300">
                                            {item.position}
                                        </p>

                                        <p className="mt-1 truncate text-sm font-medium text-blue-400">
                                            {item.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Read action */}
                                <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    Tap or click
                  </span>

                                    <span className="text-sm font-semibold text-violet-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink-400">
                    Read →
                  </span>
                                </div>
                            </button>
                        ),
                    )}
                </div>
            </div>

            {/* Complete recommendation modal */}
            {selectedRecommendation &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
                        role="presentation"
                        onMouseDown={(event) => {
                            if (
                                event.target ===
                                event.currentTarget
                            ) {
                                closeRecommendation();
                            }
                        }}
                    >
                        <article
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="recommendation-modal-title"
                            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-violet-400/30 bg-[#11111f] p-6 shadow-2xl shadow-violet-500/20 sm:p-8"
                        >
                            {/* Close icon */}
                            <button
                                type="button"
                                onClick={closeRecommendation}
                                aria-label="Close recommendation"
                                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-300 transition hover:border-pink-400 hover:bg-white/10 hover:text-white"
                            >
                                ×
                            </button>

                            {/* Person */}
                            <div className="mb-6 flex items-center gap-4 pr-12">
                                <img
                                    src={
                                        selectedRecommendation.photo
                                    }
                                    alt={`${selectedRecommendation.name} profile photo`}
                                    className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-violet-400"
                                />

                                <div className="min-w-0">
                                    <h3
                                        id="recommendation-modal-title"
                                        className="text-xl font-bold text-white"
                                    >
                                        {
                                            selectedRecommendation.name
                                        }
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-300">
                                        {
                                            selectedRecommendation.position
                                        }
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-blue-400">
                                        {
                                            selectedRecommendation.company
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Relationship */}
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-pink-400">
                                {
                                    selectedRecommendation.relationship
                                }
                            </p>

                            {/* Full recommendation */}
                            <blockquote className="whitespace-pre-line border-l-2 border-violet-400 pl-5 text-base leading-8 text-slate-300 sm:text-lg">
                                &ldquo;
                                {
                                    selectedRecommendation.recommendation
                                }
                                &rdquo;
                            </blockquote>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={closeRecommendation}
                                    className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    Close
                                </button>

                                {selectedRecommendation.linkedInUrl && (
                                    <a
                                        href={
                                            selectedRecommendation.linkedInUrl
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-5 py-3 text-center font-semibold text-white transition hover:scale-105"
                                    >
                                        View LinkedIn
                                    </a>
                                )}
                            </div>
                        </article>
                    </div>,
                    document.body,
                )}
        </>
    );
}