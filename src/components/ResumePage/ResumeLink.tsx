import { ResumeLinkProps } from "./ResumeTypes"

export const ResumeLinks = (paragraph: ResumeLinkProps) => {
    const {
        column,
        sectionIndex,
        paragraphIndex,
        link,
        styleClass
    } = paragraph;
    return (
        <>
            <p 
                className={styleClass || ""}
                key={`${column}-${sectionIndex}-${paragraphIndex}`}
            >
                {link.category}
                <a href={link.url}>{link.string}</a>
            </p>
        </>
    )
}