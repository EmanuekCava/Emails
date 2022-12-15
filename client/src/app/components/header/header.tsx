import React from 'react'

import Auth from './components/auth'
import Icon from './components/icon'

const Header = () => {
  return (
    <div className='container-header'>
        <Icon />
        <Auth />
    </div>
  )
}

export default Header