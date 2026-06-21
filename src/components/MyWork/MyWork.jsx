import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My work</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return (
              <div key={index} className="work-card">
                <div className="work-category-badge">{work.w_category}</div>
                <h2 className="work-name">{work.w_name}</h2>
                <p className="work-desc">{work.w_desc}</p>
                <div className="work-tags">
                  {work.w_tags.map((tag, i) => (
                    <span key={i} className="work-tag">{tag}</span>
                  ))}
                </div>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="work-link">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyWork