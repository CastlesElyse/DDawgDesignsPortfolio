import SEO from "./seo";
import RepeatingImage from '../assets/images/page/DDawg-Background-02.png';
import HeaderIcon from "./Header/headerIcon";
import HeaderMenu from "./Header/headerMenu";

const HomePage = () => {

    return (
        <>
            <div className="home-wrapper" style={{ 
            backgroundImage: `url(${RepeatingImage})`,
            backgroundRepeat: "repeat",
            height: `100vh`,
            width: `100vw`,
            position: "absolute",
            overflowY: "scroll",
            overflowX: "hidden"
        }}>
            <SEO page="HOME" />
            <div className="header" />
            <div id="home">
                <div id="home-img">
                    <img src={require(`../assets/images/page/Hero-Shot.png`)} alt="Hero Shot" />
                </div>
                <div id="home-context">
                    <div id="home-inner-context">
                        <div id="home-content">
                            <h1>Dylan Hollender</h1>
                            <p>Multimedia artist with a passion for magazines, video production, and social media content.</p>
                            <a href="/portfolio">View Portfolio</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
            <div className="elevated-header">
                <div className="header-content">
                    <HeaderIcon />
                    <HeaderMenu />
                </div>
                
            </div>
        </>

    )
}

export default HomePage;
