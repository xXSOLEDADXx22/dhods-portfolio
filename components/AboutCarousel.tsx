"use client";

import { useRef, useState } from "react";

type AboutCarouselProps = {
    professional: string;
    ministry: string;
};

const aboutCards = [
    {
        title: "Professional Journey",
        accent: "from-blue-500 via-violet-500 to-pink-500",
    },
    {
        title: "Technology & Ministry",
        accent: "from-violet-500 via-pink-500 to-blue-500",
    },
];

export default function AboutCarousel({
                                          professional,
                                          ministry,
                                      }: AboutCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cardDescriptions = [professional, ministry];

    const updateActiveCard = () => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        const cards = Array.from(
            carousel.querySelectorAll<HTMLElement>("[data-about-card]"),
        );

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
                "[data-about-card]",
            );

        cards[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    return (
        <div className="w-full">
            {/* Mobile swipe carousel */}
            <div
                ref={carouselRef}
                onScroll={updateActiveCard}
                className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7vw] pb-6 sm:-mx-6 sm:px-[10vw] md:hidden"
                aria-label="About me carousel"
            >
                {aboutCards.map((card, index) => (
                    <article
                        key={card.title}
                        data-about-card
                        className={`about-glass-card w-[86vw] max-w-[23rem] shrink-0 snap-center p-5 transition-all duration-500 ${
                            activeIndex === index
                                ? "scale-100 opacity-100"
                                : "scale-[0.94] opacity-35"
                        }`}
                    >
                        <AboutCardContent
                            title={card.title}
                            description={cardDescriptions[index]}
                            accent={card.accent}
                        />
                    </article>
                ))}
            </div>

            {/* Mobile carousel indicators */}
            <div className="flex justify-center gap-2 md:hidden">
                {aboutCards.map((card, index) => (
                    <button
                        key={card.title}
                        type="button"
                        onClick={() => scrollToCard(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index
                                ? "w-7 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
                                : "w-2 bg-white/20"
                        }`}
                        aria-label={`Show ${card.title}`}
                        aria-current={
                            activeIndex === index ? "true" : undefined
                        }
                    />
                ))}
            </div>

            <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 md:hidden">
                Swipe to explore
            </p>

            {/* Desktop layout */}
            <div className="hidden items-stretch gap-6 md:grid md:grid-cols-2">
                {aboutCards.map((card, index) => (
                    <article
                        key={card.title}
                        className="about-glass-card p-7 lg:p-8"
                    >
                        <AboutCardContent
                            title={card.title}
                            description={cardDescriptions[index]}
                            accent={card.accent}
                        />
                    </article>
                ))}
            </div>
        </div>
    );
}

function AboutCardContent({
                              title,
                              description,
                              accent,
                          }: {
    title: string;
    description: string;
    accent: string;
}) {
    return (
        <>
            <div
                className={`mb-6 h-1 w-16 rounded-full bg-gradient-to-r ${accent} transition-all duration-500 about-glass-card__accent`}
            />

            <h3 className="mb-4 text-xl font-black leading-tight text-white sm:text-2xl">
                {title}
            </h3>

            <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {description}
            </p>
        </>
    );
}