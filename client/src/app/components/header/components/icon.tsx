import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Icon = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const navigateMain = () => {
    navigate('/main')
  }

  return (
    <div className='container-icon-header'>
      <img src='email.png' alt='header-email' className='image-header letnoselect' style={location.pathname !== '/main' ? { cursor: 'pointer' } : {}} onClick={navigateMain} />
      <h1 className='name-header letnoselect' style={location.pathname !== '/main' ? { cursor: 'pointer' } : {}} onClick={navigateMain}>Email</h1>
    </div>
  )
}

export default Icon