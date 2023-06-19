const ContentPage = (props: any) => {
    const data = props.data;
    return (
        <div id="content-page">
            {data.mediaType === "magazine" && 
            <div id="magazine-context">
                <div id="magazine-img">
                    <img src={require(`../assets/images/${data.imgLarge}`)} alt={data.alt} />
                </div>
                <div id="magazine-content">
                    <div id="magazine-text">
                        <h2>{data.title} - {data.date}</h2>
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