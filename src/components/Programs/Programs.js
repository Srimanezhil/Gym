import React from 'react'
import './Programs.css'
import Strength from '../../assests/strength.png'
import Cardio from '../../assests/cardio.png'
import Fat from '../../assests/fat.png'
import Health from '../../assests/health.png'
import Arrow from '../../assests/arrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
{/* header */}
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='program-categories'>
        <div className='category'>
          <img src={Strength} alt='' className='emoji' />
          <span>Strength Training</span>
          <span>In this program, you are trained to improve your strength through many exercise.</span>
          <span>Join Now</span>
          <img src={Arrow} alt='' className='arrow1' />
          </div>
        <div className='category'>
          <img src={Cardio} alt='' className='emoji' />
          <span>Cardio Training</span>
          <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
          <span>Join Now</span>
          <img src={Arrow} alt='' className='arrow2' />
          </div>
        <div className='category'>
          <img src={Fat} alt='' className='emoji' />
          <span>Fat Burning</span>
          <span>This program is suitable for you who wants to get rid of your fat and lose their weight soon easily.</span>
          <span>Join Now</span>
          <img src={Arrow} alt='' className='arrow3' />
          </div>
        <div className='category'>
          <img src={Health} alt='' className='emoji' />
          <span>Health Fitness</span>
          <span>This programs is designed for those who exercise only for their body fitness not body building.</span>
          <span>Join Now</span>
          <img src={Arrow} alt='' className='arrow4' />
          </div>
      </div>
    </div>
  )
}

export default Programs
