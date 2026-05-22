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
	const [isLike, setIsLike] = useState(false);
	const [likesCount, setLikesCount] = useState(video.likesCount);
	const [showIcon, setShowIcon] = useState(false);

	// ===============================
	// AUTO PLAY WHEN IN VIEWPORT
	// ===============================
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
			{
				threshold: 0.75,
			},
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// ===============================
	// TOGGLE PLAY / PAUSE
	// ===============================
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

	// ===============================
	// LIKE TOGGLE (FIXED)
	// ===============================
	const toggleLike = (e: React.MouseEvent) => {
		e.stopPropagation(); // 🔥 CHẶN CLICK LAN RA VIDEO

		setIsLike((prev) => {
			setLikesCount((count) => count + (prev ? -1 : 1));
			return !prev;
		});
	};

	// ===============================
	// UI
	// ===============================
	return (
		<section
			ref={sectionRef}
			className="h-screen snap-start flex items-center justify-center bg-black"
		>
			<div className="relative h-full aspect-[9/16]">
				{/* VIDEO */}
				<video
					ref={videoRef}
					onClick={toggle}
					src={video.videoUrl}
					className="h-full w-full object-cover"
					playsInline
					loop
					muted
				/>

				{/* PLAY / PAUSE ICON */}
				{showIcon && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div className="text-white text-6xl bg-black/40 rounded-full p-6">
							{isPlaying ? "⏸" : "▶"}
						</div>
					</div>
				)}

				{/* LEFT INFO */}
				<div className="absolute bottom-10 left-4 text-white z-10 pointer-events-none">
					<h1 className="font-bold">{video.authorName}</h1>
					<p className="text-sm opacity-80">{video.description}</p>
				</div>

				{/* RIGHT ACTIONS */}
				<div className="absolute bottom-10 right-4 text-white z-10">
					<div className="flex flex-col gap-6 items-center">
						{/* LIKE */}
						<div className="flex flex-col items-center">
							<span>{likesCount}</span>

							<button
								onClick={toggleLike}
								className={isLike ? "text-red-500" : ""}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill={isLike ? "currentColor" : "none"}
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-7 h-7"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
									/>
								</svg>
							</button>
						</div>

						{/* COMMENT */}
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
								/>
							</svg>
						</div>

						{/* SHARE */}
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
