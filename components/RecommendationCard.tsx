"use client";

import { useState } from "react";

type RecommendationCardProps = {
    name: string;
    position: string;
    company: string;
    relationship: string;
    photo: string;
    recommendation: string;
    linkedInUrl?: string;
};

export default function RecommendationCard({
                                               name,
                                               position,
                                               company,
                                               relationship,
                                               photo,
                                               recommendation,
                                               linkedInUrl,
                                           }: RecommendationCardProps) {
    const [expanded, setExpanded] = useState(false);

    // Short messages do not need a See more button.
    const isLong = recommendation.length > 280;

    return (
        <article className="glass-card flex h-full flex-col">
            {/* Person information */}
            <div className="mb-5 flex items-center gap-4">
    <img
        src={photo}
    alt={`${name} profile photo`}
    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-violet-400/50"
    />

    <div className="min-w-0">
    <h3 className="font-bold text-white">{name}</h3>

        <p className="text-sm text-slate-300">
        {position}
        </p>

        <p className="text-sm text-blue-400">
        {company}
        </p>
        </div>
        </div>

    {/* Relationship */}
    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-pink-400">
        {relationship}
        </p>

    {/* Recommendation */}
    <div className="relative flex-1">
    <p
        className={`whitespace-pre-line leading-7 text-slate-300 ${
        !expanded && isLong
            ? "max-h-36 overflow-hidden"
            : ""
    }`}
>
&ldquo;{recommendation}&rdquo;
    </p>

    {!expanded && isLong && (
        <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#11111f] to-transparent" />
    )}
    </div>

    {/* Actions */}
    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
        {isLong ? (
                    <button
                        type="button"
                onClick={() => setExpanded((current) => !current)}
    aria-expanded={expanded}
    className="font-semibold text-violet-400 transition hover:text-pink-400"
        >
        {expanded ? "See less" : "See more"}
        </button>
) : (
        <span />
    )}

    {linkedInUrl && (
        <a
            href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
            View LinkedIn
    </a>
    )}
    </div>
    </article>
);
}