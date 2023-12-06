import {AiFillCalendar}  from 'react-icons/ai'

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectTitleAndDurationContainer,
    ProjectTitle,
    DurationContainer,
    Duration,
    ProjectDecription,
    VisitLink,
} from './styledComponents.js'

const ProjectTimelineCard = props => {
    const {ProjectDetails} = props
    const {imaegUrl, projectTitle, description, projectUrl, duration} = ProjectDetails
    return (
        <ProjectCardContainer>
            <ProjectImage src={imaegUrl} alt="project"/>
            <ProjectTitleAndDurationContainer>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <DurationContainer>
                    <AiFillCalendar color='#171f46'/>
                    <Duration>{duration}</Duration>
                </DurationContainer>
            </ProjectTitleAndDurationContainer>
            <ProjectDecription>{description}</ProjectDecription>
            <VisitLink href={projectUrl}>Visit</VisitLink>
        </ProjectCardContainer>
    )
}