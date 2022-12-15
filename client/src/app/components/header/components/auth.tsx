import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from '../../../server/actions/user.actions';

const Auth = () => {

    const { isLoggedIn, logout } = useContext(UserContext)

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateRegister = () => {
        navigate('/register')
    }

    const signOff = () => {
        logout()
    }

    return (
        <div className='container-auth-header'>
            <Link to="/" relative='path' className='text-auth-header letnoselect'>Help</Link>
            <Link to="/" relative='path' className='text-auth-header letnoselect'>About us</Link>
            {
                isLoggedIn ? (
                    <p className='text-auth-header letnoselect' style={{ color: '#c43' }} onClick={signOff}> Sign off</p>
                ) : (
                    <>
                        <button className='button-login letnoselect' onClick={navigateLogin}>Log in</button>
                        <button className='button-checkin letnoselect' onClick={navigateRegister}>Check in</button>
                    </>
                )
            }
        </div >
    )
}

export default Auth