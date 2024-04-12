import SEO from "./seo";
import RepeatingImage from '../assets/images/page/DDawg-Background-02.png';

const HomePage = () => {

    return (
        <div id="home" style={{ 
    backgroundImage: `url(${RepeatingImage})`,
    backgroundRepeat: "repeat",
}}>
            <SEO page="HOME" />
            <div id="home-img">
                <img src={require(`../assets/images/page/Hero-Shot.png`)} alt="Hero Shot" />
            </div>
            <div id="home-content">
                        <h1>Dylan Hollender</h1>
                        <p>Multimedia artist with a passion for magazines, video production, and social media content.</p>
                        <a href="/portfolio">View Portfolio</a>
                    </div>
        </div>
    )
}

export default HomePage;
