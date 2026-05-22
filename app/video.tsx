export default function VideoPage() {
	return (
		<section className="h-screen snap-start flex items-center justify-center bg-black">
			<video
				src="https://www.w3schools.com/html/mov_bbb.mp4"
				controls
				className="h-full object-cover"
			/>
		</section>
	);
}
