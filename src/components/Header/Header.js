import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assests/logo.png'
import Bars from '../../assests/bars.png'
import {Link} from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div>
      <div className='header'>
        <img src={Logo} alt='' className='logo'/>
        {(menuOpened===false && mobile===true)?(
          <div
          style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
          onClick={()=> setMenuOpened(true)}
          ><img src={Bars} alt=''  onClick={()=>setMenuOpened(false)}style={{width: '3rem', height: '3rem'}}/></div>
        ): (
        <ul className='header-menu'>
          <li><Link onClick={()=>setMenuOpened(false)} activeClass='active' to='home' span={true} smooth={true}>Home</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} to='programs' span={true} smooth={true}>Programs</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} to='reasons' span={true} smooth={true}>Why us</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} to='plans' span={true} smooth={true}>Plans</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} to='testimonials' span={true} smooth={true}>Testimonials</Link></li>
        </ul>
      )}
      </div>
    </div>
  )
}

export default Header
