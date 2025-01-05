import { IconChoice, IconProps } from "./ContactTypes"

export const ContactIcon = (iconProps: IconProps) => {

    const {url, text, icon} = iconProps;

    const getIcon = (icon: IconChoice) => {
        switch(icon) {
            case IconChoice.LINKEDIN:
                return (<img src={require(`../../assets/images/icons/LinkedIn.png`)} className="icon" alt="LinkedIn Icon" />)
            case IconChoice.YOUTUBE:
            default:
                return (<img src={require(`../../assets/images/icons/Youtube.png`)} className="icon" alt="Youtube Icon" />)
        }
    }

    return (
        <>
            <div className="icon-items">
                {getIcon(icon)}
                <p>Check me out on <a href={url}>{text}!</a></p>
            </div>
        </>
    )
}