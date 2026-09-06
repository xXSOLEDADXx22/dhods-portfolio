"use client";

import { useEffect, useRef } from "react";

type AboutVideoProps = {
    src: string;
    poster?: string;
};

export default function AboutVideo({
                                       src,
                                       poster,
                                   }: AboutVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {
                        // The visitor can still start the video manually.
                    });
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.55,
            },
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            muted
            playsInline
            controls
            preload="metadata"
            poster={poster}
            className="aspect-video w-full object-contain"
        >
            <source src={src} type="video/mp4" />
            Your browser does not support video playback.
        </video>
    );
}