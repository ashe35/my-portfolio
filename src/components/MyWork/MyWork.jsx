import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedWork = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My future work</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="mywork-container">
        {displayedWork.map((work,index)=>{
            return <img key={index} src={work.w_img} alt={`Project ${work.w_no}: ${work.w_name}`} />
        })}
      </div>
      {mywork_data.length > 3 && (
        <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
          <p>{showAll ? 'Show less' : 'Show more'}</p>
          <img src={arrow_icon} alt="Toggle arrow" style={{transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)'}} />
        </div>
      )}
    </div>
  )
}

export default MyWork