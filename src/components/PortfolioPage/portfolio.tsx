import portfolio from "../../assets/content/portfolio.json";
import SEO from "../seo";
import { PortfolioCard } from "./PortfolioCard";

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
            <SEO page="PORTFOLIO" />
            {portfolio.map((section) => (
                <section key={section.header}>
                    <h2 className="">{section.header}</h2>
                    <div className="portfolio-section">
                        {
                            section.content.map((piece: any, index: number) => (
                                <PortfolioCard portfolioPiece={piece} index={index}  />
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
