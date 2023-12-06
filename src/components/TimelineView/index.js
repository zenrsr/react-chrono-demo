import './index.css'
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
// import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  state = {courses: [], projects: []}

  componentDidMount() {
    const {timelineItemsList} = this.props

    timelineItemsList.forEach(item => {
      if (item.categoryId === 'PROJECT') {
        this.setState(prevState => ({
          projects: [...prevState.projects, item],
        }))
      } else {
        this.setState(prevState => ({
          courses: [...prevState.courses, item],
        }))
      }
    })
  }

  render() {
    const {courses} = this.state

    return (
      <div className="container">
        <Chrono className="chrono-container" mode="VERTICAL_ALTERNATING">
          {courses.map(eachCourse => (
            <CourseTimelineCard key={eachCourse.id} eachCourse={eachCourse} />
          ))}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
