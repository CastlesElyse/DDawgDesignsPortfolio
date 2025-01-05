import { PortfolioPieceProps } from "./PortfolioTypes"

export const PortfolioCard = (portfolioPieceData: PortfolioPieceProps) => {

    const {portfolioPiece, index} = portfolioPieceData;

    return (
        <>
            <div key={`${portfolioPiece.title}-${index}`} className="portfolio-figure">
                                    
                <figure className="">
                    <a href={portfolioPiece.slug}>
                        <img 
                            className="magazine-thumbnail" 
                            src={require(`../../assets/images/${portfolioPiece.imgSmall}`)} 
                            alt={portfolioPiece.alt} 
                        />
                        <div className="magazine-text">
                            <p className="db-text-align-center-bold">{portfolioPiece.title}</p>
                            <i><p className="db-text-align-center">-{portfolioPiece.date}-</p></i>
                        </div>

                    </a>
                </figure>
                                    
            </div>
        </>
    )
}