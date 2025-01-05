import { ImageContent } from "./ImageContent";
import { VideoContent } from "./VideoContent";


const ContentPage = (props: any) => {
    const data = props.data;

    const mediaType = data.mediaType; 

    return (
        <div id="content-page">
            <div id="magazine-context">

                { mediaType === "video" && <VideoContent {...data.embed} /> }
                { mediaType !== "video" && <ImageContent {...data} /> }
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
