import SEO from "./seo";

const HomePage = () => {

    return (
        <div id="home" style="background-image: url("../assets/images/page/DDawg-Background-02.png"); background-repeat: repeat;">
            <SEO page="HOME" />
            <div id="home-img">
                <img src={require(`../assets/images/page/Hero-Shot.png`)} alt="Hero Shot" />
            </div>
            <div id="home-context">
                <h1>Dylan Hollender</h1>
                <div id="home-inner-context">
                    <div id="home-content">
                        <p>Multimedia artist with a passion for magazines, video production, and social media content.</p>
                        <a href="/portfolio">View Portfolio</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;
