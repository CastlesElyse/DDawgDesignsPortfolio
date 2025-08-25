import resume from "../../assets/content/resume.json";
import SEO from "../seo";
import { ResumeColumn } from "./ResumeColumn";

const ResumePage = () => {

    return (
        <div id="resume-background">
            <SEO page="RESUME" />
            <h1>Resume</h1>
            <div id="resume-context">
                <div id="resume-left">
                    <div className="resume-block">
                        <h2 id="resume-name">{resume.name}</h2>
                        <p id="resume-pronouns">{resume.pronouns}</p>
                    </div>
                    <ResumeColumn colData={resume.leftBlock.subBlocks} column="left" header={resume.leftBlock.header} />
                </div>
                <div id="resume-right">
                    <ResumeColumn colData={resume.rightBlock.subBlocks} column="right" header={resume.rightBlock.header} />
                </div>
                <div id="resume-skills">
                    <ResumeColumn colData={resume.skillsBlock.subBlocks} column="skills" header={resume.skillsBlock.header} />
                </div>
            </div>
            <a id="resume-button" href="https://drive.google.com/file/d/1vHHIw9dXT-gen5RhDKWjTcdu9hBki0Cp/view?usp=sharing">Download Resume</a>
        </div>
    )
}

export default ResumePage;
