import resume from "../assets/content/resume.json";
import SEO from "./seo";

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
                    {resume.leftBlock.map((block, index) => (
                        <div className="resume-block" key={`${block.header}-${index}`}>
                            {block.header !== "" ? <h3>{block.header}</h3> : <></>}
                            {block.subBlocks.map((subBlock, index) => (
                                <div key={`${subBlock.subHeader}-${index}`}>
                                    <h4 className="resume-subheader">{subBlock.subHeader}</h4>
                                    <div className="resume-subtext">
                                        {subBlock.text.map((para, pIndex) => (
                                            <p className="allow-newline" key={`left-${index}-${pIndex}`}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div id="resume-right">
                {resume.rightBlock.map((block, index) => (
                        <div className="resume-block" key={`${block.header}-${index}`}>
                            {block.header !== "" ? <h3>{block.header}</h3> : <></>}
                            {block.subBlocks.map((subBlock, index) => (
                                <div key={`${subBlock.subHeader}-${index}`}>
                                    <h4 className="resume-subheader">{subBlock.subHeader}</h4>
                                    <div className="resume-subtext">
                                        {subBlock.text.map((para, pIndex) => (
                                            <p key={`right-${index}-${pIndex}`}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <a id="resume-button" href="https://drive.google.com/file/d/1Yz7t2fpPqeB4m7M6iIiZzdj1P2LLhcGp/view?usp=sharing">Download Resume</a>
        </div>
    )
}

export default ResumePage;
