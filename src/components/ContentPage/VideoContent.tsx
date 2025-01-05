import YouTube from "react-youtube";
import { VideoProps } from "./ContentTypes";

export const VideoContent = (videoProps: VideoProps) => {

    const videoOptions = {
        height: videoProps.height, 
        width: videoProps.width
    };

    const onReady = (e: any) => {
        // access to player in all event handlers via event.target
        e.target?.pauseVideo();
    }

    return (
        <>
            <div id="responsive-video-wrapper">
                <div id="video-embed">
                    <div className="video-wrapper">
                        <YouTube
                            videoId={videoProps.id}
                            opts={videoOptions}
                            onReady={onReady}
                            className="youtube-embed"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}