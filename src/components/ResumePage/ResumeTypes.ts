export interface ParagraphProps {
    column: string;
    sectionIndex: number;
    paragraphIndex: number;
    text: string;
    styleClass?: string;
}

export interface ResumeLinksType {
    category: string;
    string: string;
    url: string;
}

export interface ResumeLinkProps {
    column: string;
    sectionIndex: number;
    paragraphIndex: number;
    link: ResumeLinksType;
    styleClass?: string;
}

export interface ResumeTopicType {
    subHeader: string;
    styleClass?: string;
    text: Array<ResumeLinksType> | Array<string>;
}

export enum ResumeContnetType {
    PARAGRAPH,
    LINK
}

export interface ResumeTopicProps {
    topic: ResumeTopicType;
    index: number;
    column: string;
}

export interface ResumeColumnProps {
    colData: Array<ResumeTopicType>;
    column: string;
    header: string;
}