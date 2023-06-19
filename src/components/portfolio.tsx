import portfolio from "../assets/content/portfolio.json";

const PortfolioPage = (props: any) => {
    const width = props.width;

    const getSpacers = (len: number) => {
        if (width >= 878) {
            if (len % 3 === 0) {
                return (<></>)
            } 
            else if (len % 3 === 2) {
                return (<i aria-hidden="true"></i>)
            } else {
                return (<><i aria-hidden="true"></i><i aria-hidden="true"></i></>)
            }
        }
        else if (width > 596) {
            if (len % 2 === 0) {
                return (<></>)
            } else {
                return (<i aria-hidden="true"></i>)
            }
        } else {
            return (<></>)
        }
    }
    
    return (
        <div id="portfolio">
            {portfolio.map((section) => (
                <section key={section.header}>
                    <h2 className="">{section.header}</h2>
                    <div className="portfolio-section">
                        {
                            section.content.map((piece: any, index: number) => (
                                <div key={`${piece.title}-${index}`} className="portfolio-figure">
                                    
                                        <figure className="">
                                            <a href={piece.slug}>
                                                <img className="magazine-thumbnail" src={require(`../assets/images/${piece.imgSmall}`)} alt={piece.alt} />
                                                <div className="magazine-text">
                                                    <h3 className="db-text-align-center">{piece.title}</h3>
                                                    <p className="db-text-align-center">-{piece.date}-</p>
                                                </div>

                                            </a>
                                        </figure>
                                        
                                </div>
                            ))
                        }
                        {getSpacers(section.content.length)}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default PortfolioPage;