import VideoPlayer from "@/components/video/VideoPlayer";
import { data } from "@/data";

export default function Page() {
    return (
        <div className=" h-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar">
            {data.map((video) => (
                <VideoPlayer key={video.id} video={video} />
            ))}
        </div>
    );
}
