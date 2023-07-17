import React from 'react'
import './Reasons.css'
import Image1 from '../../assests/img 5.jpg'
import Image2 from '../../assests/img 7.jpg'
import Image3 from '../../assests/img 17.jpg'
import Image4 from '../../assests/img 9.jpg'
import Tick from '../../assests/tick.png'
import Brand from '../../assests/brand.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src={Image1} alt='' />
        <img src={Image2} alt='' />
        <img src={Image3} alt='' />
        <img src={Image4} alt='' />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>
          <div className='details-r'>
            <div>
              <img src={Tick} alt='' />
              <span>OVER 140+ EXPERT COACHES</span>
            </div>
            <div>
              <img src={Tick} alt='' />
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={Tick} alt='' />
              <span>FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
              <img src={Tick} alt='' />
              <span>RELIABLE PARTNERS</span>
            </div>
          </div>
          <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
          <div className='partners'>
          <img src={Brand} alt='' />
          </div>
          </div>
      </div>
  )
}

export default Reasons
