"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";

type Commitment = {
    category: string;
    title: string;
    description: string;
    image?: string;
};

type CommitmentsCarouselProps = {
    commitments: Commitment[];
};

export default function CommitmentsCarousel({
                                                commitments,
                                            }: CommitmentsCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveCard = () => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const cards = Array.from(
            carousel.querySelectorAll<HTMLElement>(
                "[data-commitment-card]",
            ),
        );

        if (cards.length === 0) {
            return;
        }

        const carouselRect = carousel.getBoundingClientRect();
        const carouselCenter =
            carouselRect.left + carouselRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter =
                cardRect.left + cardRect.width / 2;
            const distance = Math.abs(
                carouselCenter - cardCenter,
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    const scrollToCard = (index: number) => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const cards =
            carousel.querySelectorAll<HTMLElement>(
                "[data-commitment-card]",
            );

        cards[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    return (
        <div className="w-full">
            {/* Mobile carousel */}
            <div
                ref={carouselRef}
                onScroll={updateActiveCard}
                className="hide-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-[8vw] pb-6 sm:-mx-6 sm:px-[12vw] md:hidden"
                aria-label="Commitments carousel"
            >
                {commitments.map((commitment, index) => (
                    <div
                        key={commitment.title}
                        data-commitment-card
                        className={`w-[82vw] max-w-[22rem] shrink-0 snap-center transition-all duration-500 ${
                            activeIndex === index
                                ? "scale-100 opacity-100"
                                : "scale-[0.94] opacity-40"
                        }`}
                    >
                        <CommitmentCard commitment={commitment} />
                    </div>
                ))}
            </div>

            {/* Mobile indicators */}
            <div className="flex justify-center gap-2 md:hidden">
                {commitments.map((commitment, index) => (
                    <button
                        key={commitment.title}
                        type="button"
                        onClick={() => scrollToCard(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index
                                ? "w-7 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
                                : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Show ${commitment.title}`}
                        aria-current={
                            activeIndex === index ? "true" : undefined
                        }
                    />
                ))}
            </div>

            {/* Desktop cards */}
            <div className="hidden items-stretch gap-6 md:grid md:grid-cols-3">
                {commitments.map((commitment) => (
                    <CommitmentCard
                        key={commitment.title}
                        commitment={commitment}
                    />
                ))}
            </div>
        </div>
    );
}

function CommitmentCard({
                            commitment,
                        }: {
    commitment: Commitment;
}) {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e19] shadow-xl shadow-black/20 transition duration-500 hover:border-violet-400/60 hover:shadow-2xl hover:shadow-violet-500/15">
            {/* Same image frame and top alignment for every card */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#0a0a13]">
                {commitment.image ? (
                    <img
                        src={commitment.image}
                        alt={commitment.title}
                        draggable={false}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-pink-500/20" />
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0e0e19]/80 to-transparent" />
            </div>

            {/* Consistent glass content panel */}
            <div className="relative flex flex-1 flex-col items-center overflow-hidden border-t border-white/10 bg-white/[0.025] px-6 pb-7 pt-6 text-center backdrop-blur-xl transition duration-500 group-hover:border-violet-400/30 group-hover:bg-white/[0.06]">
                {/* Hover glass shine */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition duration-700 group-hover:translate-x-full" />

                {/* Category */}
                <p className="relative mb-4 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-300 transition duration-500 group-hover:border-pink-400/45 group-hover:bg-pink-500/10 group-hover:text-pink-300">
                    {commitment.category}
                </p>

                {/* Accent */}
                <div className="relative mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-500 group-hover:w-24 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.65)]" />

                {/* Equal title area */}
                <div className="relative flex min-h-[3.5rem] items-center justify-center">
                    <h3 className="text-xl font-black leading-tight text-white transition duration-500 group-hover:text-violet-100 lg:text-2xl">
                        {commitment.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-relaxed text-slate-300 transition duration-500 group-hover:text-slate-100">
                    {commitment.description}
                </p>
            </div>

            {/* Bottom hover line */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-transform duration-500 group-hover:scale-x-100" />
        </article>
    );
}