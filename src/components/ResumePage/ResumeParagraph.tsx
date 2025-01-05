import { ParagraphProps } from "./ResumeTypes"

export const ResumeParagraph = (paragraph: ParagraphProps) => {
    const {
        column,
        sectionIndex,
        paragraphIndex,
        text,
        styleClass
    } = paragraph;
    return (
        <>
        <p 
            key={`${column}-${sectionIndex}-${paragraphIndex}`}
            className={styleClass || ""}
        >
            {text}
        </p>
        </>
    )
}