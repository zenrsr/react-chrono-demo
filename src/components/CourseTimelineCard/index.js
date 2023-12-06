import './index.css'

const CourseTimelineCard = props => {
  const {eachCourse} = props
  console.log(eachCourse)
  const {title} = eachCourse
  return (
    <div className="course-container">
      <h1>{title}</h1>
    </div>
  )
}

export default CourseTimelineCard
