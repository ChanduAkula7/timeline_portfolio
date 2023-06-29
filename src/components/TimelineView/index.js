import './index.css'
import {Chrono} from 'react-chrono'

import CoursesTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseseData = timelineItemsList.filter(i => i.categoryId === 'COURSE')
  console.log(courseseData)
  const projectData = timelineItemsList.filter(i => i.categoryId === 'PROJECT')
  console.log(projectData)

  return (
    <div className="chrono-container">
      <div>
        <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
        <h1 className="heading">My journey in Web Development</h1>
        <p className="bio">
          Hello all... This is CHANDRAKANTH AKULA (Web developer)
        </p>
      </div>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(i => {
          if (i.categoryId === 'COURSE') {
            return (
              <div>
                <CoursesTimelineCard courseseData1={i} />
              </div>
            )
          }
          return (
            <div>
              <ProjectTimelineCard t={i} />
            </div>
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
