const ContentPage = (props: any) => {
    const data = props.data;

    const mediaType = data.mediaType; 

    return (
        <div id="content-page">
            {data.mediaType === "magazine" && 
            <div id="magazine-context">

                {
                    mediaType === "video" &&
                    <div>
                        <div dangerouslySetInnerHTML={{__html: data.embed}} />
                    </div>
                }
                <div id="magazine-img">
                    <img src={require(`../assets/images/${data.imgLarge}`)} alt={data.alt} />
                </div>
                <div id="magazine-content">
                    <div id="magazine-text">
                        <h2>{data.title} - {data.date}</h2>
                        {data.externalLink && 
                            <a href={data.externalLink}><h4>See More</h4></a>
                        }
                        <p><span className="text-bold">Skills: </span>{data.skills}</p>
                        <p><span className="text-bold">Software Used: </span>{data.software}</p>
                        <p>{data.description}</p>
                    </div>
                    
                </div>
            </div>
            }
        </div>
    )
}

export default ContentPage;