import { ResumeTopic } from "./ResumeTopic";
import { ResumeColumnProps } from "./ResumeTypes"

export const ResumeColumn = (columnProps: ResumeColumnProps) => {
    const {colData, header, column} = columnProps;
    return (
        <>
            <div className="resume-block">
                {header !== "" ? <h3>{header}</h3> : <></>}
                {colData.map((subBlock, index) => (
                    <ResumeTopic 
                        topic={subBlock} 
                        index={index} 
                        column={column} 
                        key={`${header}-${index}`}
                    />
                ))}
            </div>
        </>
    )
}