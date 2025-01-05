import contact from "../../assets/content/contact.json";
import SEO from "../seo";
import { ContactIcon } from "./ContactIcon";
import { IconChoice } from "./ContactTypes";

const ContactPage = () => {

    return (
        <div id="contact">
            <SEO page="CONTACT" />
            <h2>Let’s Get in Touch!</h2>
            <div id="contact-context">
                <div id="contact-img" >
                    <img src={require(`../../assets/images/page/Contact.png`)} alt="Dylan Portrait" />
                </div>
                <div id="contact-info">
                    <h3>Contact Information</h3>
                    <div id="icon-container">
                        <div className="icon-items">
                            <img src={require(`../../assets/images/icons/Gmail.png`)} className="icon" alt="Gmail Icon"/>
                            <p><span className="line-br">hollenderdylan</span><span className="line-br">@gmail.com</span></p>
                        </div>
                        <ContactIcon text={contact.youtube} url={contact.youtubeLink} icon={IconChoice.YOUTUBE} />
                        <ContactIcon text={contact.linkedin} url={contact.linkedinLink} icon={IconChoice.LINKEDIN} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
