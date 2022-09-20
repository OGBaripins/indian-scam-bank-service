import React from 'react'
import Logo from '../images/Logo.png'

function headerBar() {
  return (
    <div className='header'>
      <div className='infoBox'>
        <div className='logoBox'>
          <img src={Logo} className='logo'></img>
        </div>
      </div>
    </div>
  )
}

export default headerBar