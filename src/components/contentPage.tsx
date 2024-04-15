import YouTube from "react-youtube";

const ContentPage = (props: any) => {
    const data = props.data;

    const mediaType = data.mediaType; 

    const videoOptions =  data.embed ? {
        height: data.embed.height, 
        width: data.embed.width
    } : {}

    const onReady = (e: any) => {
        // access to player in all event handlers via event.target
        e.target?.pauseVideo();
    }

    return (
        <div id="content-page">
            <div id="magazine-context">

                {
                    mediaType === "video" &&
                    <div id="video-embed">
                        <YouTube
                            videoId={data.embed.id}
                            opts={videoOptions}
                            onReady={onReady}
                            className="youtube-embed"
                        />
                    </div>
                }
                {
                    mediaType !== "video" &&
                    <div id="magazine-img">
                        <img src={require(`../assets/images/${data.imgLarge}`)} alt={data.alt} />
                    </div>
                }
                <div id="magazine-content">
                    <div id="magazine-text">
                        <h2>{data.title} - {data.date}</h2>
                        {data.externalLink && 
                            <a href={data.externalLink}><h3>See More</h3></a>
                        }
                        <p><span className="text-bold">Skills: </span>{data.skills}</p>
                        <p><span className="text-bold">Software Used: </span>{data.software}</p>
                        <p>{data.description}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ContentPage;
