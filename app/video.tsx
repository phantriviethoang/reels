"use client";

import { useEffect, useRef, useState } from "react";

type Video = {
	id: number;
	videoUrl: string;
	authorName: string;
	description: string;
	likesCount: number;
};

export default function VideoPage({ video }: { video: Video }) {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!videoRef.current) return;

				if (entry.isIntersecting) {
					videoRef.current.play();
					setIsPlaying(true);
				} else {
					videoRef.current.pause();
					setIsPlaying(false);
				}
			},
			{ threshold: 0.7 },
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

		// show icon tạm thời
		setShowIcon(true);
		setTimeout(() => setShowIcon(false), 700);
	};

	return (
		<section
			ref={sectionRef}
			className="h-screen snap-start flex items-center justify-center bg-black"
		>
			<div className="relative h-full aspect-9/16">
				<video
					ref={videoRef}
					onClick={toggle}
					src={video.videoUrl}
					className="h-full w-full object-cover"
					playsInline
					loop
					muted
				/>

				{showIcon && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div className="text-white text-6xl bg-black/40 rounded-full m-2 p-6">
							{isPlaying ? "⏸" : "▶"}
						</div>
					</div>
				)}

				<div className="absolute bottom-20 left-4 text-white z-10 pointer-events-none">
					<h1>{video.authorName}</h1>
					<p>{video.description}</p>
				</div>
			</div>
		</section>
	);
}
