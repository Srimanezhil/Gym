import React from 'react'
import './Plans.css'
import Sarrow from '../../assests/sarrow.png'
import Stick from '../../assests/stick.png'
import Basic from '../../assests/basic.png'
import Premium from '../../assests/premium.png'
import Dumb from '../../assests/strength.png'

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>
      <div className='plans'>
        <div className='plan'>
            <img src={Basic} alt='' />
            <span>BASIC PLANS</span>
            <span>$ 25</span>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>2 hours of excercises</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Free consultation to coaches</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Access to The Community</span>
          </div>
          <div>
            <span>See more benefits<span><img src={Sarrow} alt='' className='arrow' /></span></span>
          </div>
          <button>Join now</button>
        </div>
        <div className='plan'>
            <img src={Premium} alt='' />
            <span>PREMIUM PLANS</span>
            <span>$ 30</span>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>5 hour of excercises</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Free consultation to coaches</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Access to minibar</span>
          </div>
          <div>
            <span>See more benefits<span><img src={Sarrow} alt='' className='arrow' /></span></span>
          </div>
          <button className='button'>Join now</button>
        </div>
        <div className='plan'>
            <img src={Dumb} alt='' />
            <span>PRO PLANS</span>
            <span>$ 45</span>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>8 hours of excercises</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Consultation of Private coach</span>
          </div>
          <div>
            <img src={Stick} alt='' className='feature' />
            <span>Free Fitness Merchandises</span>
          </div>
          <div>
            <span>See more benefits<span><img src={Sarrow} alt='' className='arrow' /></span></span>
          </div>
          <button>Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Plans
