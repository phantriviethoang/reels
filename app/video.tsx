"use client";

import { useEffect, useRef } from "react";

type Video = {
	id: number;
	videoUrl: string;
	authorName: string;
	description: string;
	likesCount: number;
};

interface VideoPageProps {
	video: Video;
}

export default function VideoPage({ video }: VideoPageProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!videoRef.current) return;

				if (entry.isIntersecting) {
					videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			},
			{
				threshold: 0.6,
			},
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section className="h-screen snap-start flex items-center justify-center bg-black">
			<div className="relative h-full aspect-9/16">
				<video
					ref={videoRef}
					src={video.videoUrl}
					className="h-full w-full object-cover"
					playsInline
					loop
					muted
				/>

				<div className="absolute inset-0">
					<div className="absolute bottom-20 left-4 text-white z-10">
						<h1>{video.authorName}</h1>
						<p>{video.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
