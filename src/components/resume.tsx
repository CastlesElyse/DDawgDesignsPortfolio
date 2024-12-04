import resume from "../assets/content/resume.json";
import SEO from "./seo";

interface ResumeLinks {
    category: string;
    string: string;
    url: string;
}

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
                                    { subBlock.subHeader === "Profiles" && 
                                        <div className="resume-subtext">
                                            {subBlock.text.map((para, pIndex) => (
                                                <p className="resume-url" key={`left-${index}-${pIndex}`}>
                                                    {(para as ResumeLinks).category}
                                                    <a href={(para as ResumeLinks).url}>{(para as ResumeLinks).string}</a>
                                                </p>
                                            ))}
                                        </div>
                                    }
                                    {
                                        subBlock.subHeader === "Contact Information" &&
                                        <div className="resume-subtext" style={{wordBreak: "break-all", whiteSpace: "normal"}}>
                                            {subBlock.text.map((para, pIndex) => (
                                                <p className="resume-contact" key={`left-${index}-${pIndex}` }>{para as string}</p>
                                            ))}
                                        </div>
                                    }

                                    {
                                        (subBlock.subHeader !== "Profiles" && subBlock.subHeader !== "Contact Information") &&
                                        <div className="resume-subtext">
                                            {subBlock.text.map((para, pIndex) => (
                                                <p className="allow-newline" key={`left-${index}-${pIndex}`}>{para as string}</p>
                                            ))}
                                        </div>
                                    }
                                    
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
                <div id="resume-skills">
                    {resume.skillsBlock.map((block, index) => (
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
            <a id="resume-button" href="Dylan-Hollender-Resume.pdf" download="Dylan-Hollender-Resume.pdf">Download Resume</a>
        </div>
    )
}

export default ResumePage;
