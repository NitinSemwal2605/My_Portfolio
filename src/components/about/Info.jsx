import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <i class= "bx bx-award about_icon"></i>
            <h3 className='about_title'>Experience</h3>
            <span className='about_subtitle'>2 Years Working</span>
        </div>

        <div className='about_box'>
        <i class= "bx bx-briefcase-alt-2 about_icon"></i>
            <h3 className='about_title'>Completed</h3>
            <span className='about_subtitle'>14+ Projects </span>
        </div>


        <div className='about_box'>
            
        <i class= "bx bx-support about_icon"></i>
            <h3 className='about_title'>Supports</h3>
            <span className='about_subtitle'>Online 24/7 </span>
        </div>

    </div>
  )
}

export default Info
