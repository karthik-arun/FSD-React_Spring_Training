import React from 'react'
import NavbarComponent from './NavbarComponent'
import LogoComponent from './LogoComponent'

export default function HeaderComponent() {
  return (
    <div>
      <h4>Header component</h4>
        <div className='rowC'>
          <LogoComponent/>
          <NavbarComponent/>
        </div>
       
    </div>
  )
}
