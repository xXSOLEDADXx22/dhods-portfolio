"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type EndorsementFormModalProps = {
    formUrl: string;
};

export default function EndorsementFormModal({
                                                 formUrl,
                                             }: EndorsementFormModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function openModal() {
        if (!formUrl) {
            return;
        }

        setIsLoading(true);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow =
                previousOverflow;

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [isOpen]);

    const externalFormUrl = formUrl
        .replace("?embedded=true", "")
        .replace("&embedded=true", "");

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                disabled={!formUrl}
                className="inline-flex items-center justify-center rounded-xl border border-violet-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:scale-105 hover:border-pink-400 hover:bg-white/10 hover:text-pink-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
                Add Your Endorsement
            </button>

            {isOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
                        role="presentation"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                closeModal();
                            }
                        }}
                    >
                        <section
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="endorsement-form-title"
                            className="flex h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-violet-400/30 bg-[#11111f] shadow-2xl shadow-violet-500/20"
                        >
                            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                                <div>
                                    <h2
                                        id="endorsement-form-title"
                                        className="text-lg font-bold text-white sm:text-xl"
                                    >
                                        Add Your Endorsement
                                    </h2>

                                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                                        Your submission will be reviewed before publication.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    aria-label="Close endorsement form"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-300 transition hover:border-pink-400 hover:bg-white/10 hover:text-white"
                                >
                                    ×
                                </button>
                            </header>

                            <div className="relative min-h-0 flex-1 bg-white">
                                {isLoading && (
                                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#11111f]">
                                        <p className="animate-pulse text-sm text-violet-300">
                                            Loading endorsement form…
                                        </p>
                                    </div>
                                )}

                                <iframe
                                    src={formUrl}
                                    title="Add Your Endorsement form"
                                    className="h-full w-full border-0 bg-white"
                                    onLoad={() => setIsLoading(false)}
                                />
                            </div>

                            <footer className="flex shrink-0 flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-3 sm:flex-row sm:px-6">
                                <p className="text-center text-xs text-slate-500 sm:text-left">
                                    Complete all required fields before submitting.
                                </p>

                                <a
                                    href={externalFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-blue-400 transition hover:text-pink-400"
                                >
                                    Open form in new tab ↗
                                </a>
                            </footer>
                        </section>
                    </div>,
                    document.body,
                )}
        </>
    );
}