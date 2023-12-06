import './index.css'
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading
} from 'styled-components'

const TimelineView = props => {

    const {timelineItemsList} = this.props
    const renderTimelineCard = item => {
      if(item.categoryId === "PROJECT"){
        return <ProjectTimelineCard key={item.id} projectDetails={item} />
      }
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }

    return (
      <TimelineContainer>
        <ResponsiveContainer>
          <HeaderContainer>
            <Heading>MY JOURNEY <br/> 
            <CCBPHeading>CCBP 4.0</CCBPHeading>
            </Heading>
          </HeaderContainer>
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode='VERTICAL_ALTERNATING'
          >
            {timelineItemsList.map(eachcItem => renderTimelineCard(eachcItem))}
          </Chrono>
        </ResponsiveContainer>
      </TimelineContainer>
    )

}

export default TimelineView
