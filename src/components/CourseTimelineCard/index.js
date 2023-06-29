// import {Chrono} from 'react-chrono'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CoursesTimelineCard = props => {
  const {courseseData1} = props
  console.log(courseseData1)
  const {
    id,
    title,
    courseTitle,
    description,
    tagsList,
    duration,
  } = courseseData1
  return (
    <>
      <div className="course-container">
        <div>
          <h1>{courseTitle}</h1>
          <p>
            <AiFillClockCircle />
            {duration}
          </p>
        </div>
        <p>{description}</p>
        <div className="list">
          {tagsList.map(i => (
            <div>
              <p className="box">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default CoursesTimelineCard
