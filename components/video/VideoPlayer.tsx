"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { Video } from "@/types/video";

export default function VideoPlayer({ video }: { video: Video }) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [likesCount, setLikesCount] = useState(video.likesCount);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!videoRef.current) return;

                if (entry.isIntersecting) {
                    videoRef.current.play().catch((err) => console.log("play blocked:", err));
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
            {
                threshold: 0.7,
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggle = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }

        setShowIcon(true);
        setTimeout(() => setShowIcon(false), 600);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!videoRef.current) return;

        const newMuted = !isMuted;
        setIsMuted(newMuted);

        videoRef.current.muted = newMuted;
    };

    const toggleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLike(!isLike);
        setLikesCount(likesCount + (isLike ? -1 : 1));
    };

    return (
        <section ref={sectionRef} className="h-screen w-screen bg-black flex items-center justify-center snap-start">
            <div className="relative h-full w-full max-w-150 aspect-9/16">
                <video ref={videoRef} onClick={toggle} src={video.videoUrl} className="h-full w-full object-cover" playsInline loop muted={isMuted} />

                <button onClick={toggleMute} className="absolute top-15 right-4 bg-black/50 p-2 rounded-full text-white md:top-3">
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                {showIcon && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white text-4xl bg-black/40 rounded-full w-24 h-24 flex items-center justify-center">{isPlaying ? "⏸" : "▶"}</div>
                    </div>
                )}

                <div className="absolute bottom-4 left-3 md:bottom-10 md:left-6 text-white z-10 pointer-events-none max-w-[80%]">
                    <h1 className="font-bold text-base md:text-lg lg:text-xl">{video.authorName}</h1>

                    <p className="text-xs md:text-sm opacity-80 leading-snug">{video.description}</p>
                </div>

                <div className="absolute bottom-5 right-3 text-white z-10 space-y-5">
                    <div className="relative bg-white/25 rounded-full p-1">
                        <svg width="30" height="30" viewBox="0 0 71 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5361 25.1503L31.0642 2.84357e-06L39.6977 0L70.9999 54.2169L66.9364 61.255L19.5094 61.2547L27.1208 48.0713L52.2291 48.0723L35.3921 18.9072L31.7697 25.1503L16.5361 25.1503Z" fill="white" />
                            <path d="M12.258 32.5835L12.2614 32.5835L27.4929 32.5835L10.8776 61.3039L4.34502 61.3038L0 53.778L12.258 32.5835Z" fill="#53B5FF" />
                        </svg>

                        <span className=" absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm ">+</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <button onClick={toggleLike} className={isLike ? "text-red-500" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={isLike ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>

                        <span>{likesCount}</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                        <span>...</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                        <span>...</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
