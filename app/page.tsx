import VideoPage from "./video";

export default function Home() {
	return (
		<div className=" h-screen overflow-y-scroll snap-y snap-mandatory ">
			<VideoPage />
			<VideoPage />
			<VideoPage />
		</div>
	);
}
