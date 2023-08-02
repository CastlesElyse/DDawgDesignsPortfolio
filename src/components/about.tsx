import about from "../assets/content/about.json";
import SEO from "./seo";

const AboutPage = (params: any) => {
    const width = params.width;
    return (
        <div id="about">
            <SEO page="ABOUT" />
            {about.map((section, index) => (
                <section className="about-section" key={section.sectionTitle}>
                    <div className="about-context">
                        <div className="about-text-item" style={{order: width > 877 && index%2 === 0? 1 : 0}}>
                            <article>
                                <h3>{section.sectionTitle}</h3>
                                {section.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                
                            </article>
                        </div>
                        <div className="about-img-item" style={{order: width > 877 && index%2 === 1? 1 : 0}}>
                            { section.img !== "" && <img className="" src={require(`../assets/images/${section.img}`)} alt={section.alt} />}
                        </div>
                    </div>
                </section>
            ))} 
        </div>
    )
}

export default AboutPage;