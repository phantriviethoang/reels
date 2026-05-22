import VideoPage from "./video";
import { data } from "@/lib/data";

export default function Page() {
	return (
		<div className=" h-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar">
			{data.map((video) => (
				<VideoPage
					key={video.id}
					video={video}
				/>
			))}
		</div>
	);
}
