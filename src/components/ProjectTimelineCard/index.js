// import {AiFillClockCircle} from 'react-icons/ai'
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {t} = props
  const {projectUrl, duration, imageUrl, description, projectTitle} = t
  return (
    <>
      <div className="project">
        <div>
          <img src={imageUrl} className="img1" alt="project" />
        </div>
        <a href={projectUrl} target="blank">
          Visit
        </a>
        <div className="box1">
          <h1>{projectTitle}</h1>
          <p>
            <AiFillCalendar />
            {duration}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}
export default ProjectTimelineCard
