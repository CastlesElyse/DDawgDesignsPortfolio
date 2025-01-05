import { ResumeLinks } from "./ResumeLink";
import { ResumeParagraph } from "./ResumeParagraph";
import { ResumeLinksType, ResumeTopicProps } from "./ResumeTypes"


const ProfilesTopic = (profile: ResumeTopicProps) => {
    const { topic, index, column } = profile;
    const { text, styleClass } = topic;
    return (
        <>
            <div className="resume-subtext">
                {text.map((link, pIndex: number) => (
                    <ResumeLinks 
                        styleClass={styleClass} 
                        column={column} 
                        sectionIndex={index} 
                        paragraphIndex={pIndex} 
                        link={link as ResumeLinksType}
                        key={`profiles-${index}-${pIndex}`} 
                    />
                ))}
            </div>
        </>
    )
}

const ContactInfoTopic = (contact: ResumeTopicProps) => {
    const { topic, index, column } = contact;
    const { text, styleClass } = topic;
    return (
        <>
            <div className="resume-subtext" style={{wordBreak: "break-all", whiteSpace: "normal"}}>
                {text.map((para, pIndex) => (
                    <ResumeParagraph 
                        styleClass={styleClass} 
                        column={column} 
                        sectionIndex={index} 
                        paragraphIndex={pIndex} 
                        text={para as string}
                        key={`contact-${index}-${pIndex}`}
                    />
                ))}
            </div>
        </>
    )
}

const BasicTopic = (topicProps: ResumeTopicProps) => {
    const { topic, index, column } = topicProps;
    const {styleClass, text } = topic
    return (
        <>
            <div className="resume-subtext">
                {text.map((para, pIndex) => (
                    <ResumeParagraph 
                        styleClass={styleClass} 
                        column={column} 
                        sectionIndex={index} 
                        paragraphIndex={pIndex} 
                        text={para as string}
                        key={`basic-${index}-${pIndex}`} 
                    />
                ))}
            </div>
        </>
    )
}

const getSectionType = (topicProps: ResumeTopicProps) => {
    const {topic} = topicProps;
    switch(topic.subHeader) {
        case "Profiles":
            return (<ProfilesTopic {...topicProps} />)
        case "Contact Information":
            return (<ContactInfoTopic {...topicProps} />)
        default:
            return (<BasicTopic {...topicProps} />)
    }
}



export const ResumeTopic = (topicProps: ResumeTopicProps) => {

    const { topic } = topicProps;

    return (
        <>
            <h4 className="resume-subheader">{topic.subHeader}</h4>
            {getSectionType(topicProps)}
        </>
        
    )
}