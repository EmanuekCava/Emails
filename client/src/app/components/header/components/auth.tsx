import { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

import { UserContext } from '../../../server/actions/user.actions';

import { IReducerUser } from '../../../interface/User';

import { isStorage } from '../../../helper/storage';

const Auth = () => {

    const { logout } = useContext<IReducerUser>(UserContext)
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateRegister = () => {
        navigate('/register')
    }

    const signOff = () => {
        logout!()
    }

    const openMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <div className='container-auth-header'>
            {
                isMenu &&
                <div className="contain-menu">
                    <Link to="/" relative='path' className='text-header-menu letnoselect'>Help</Link>
                    <Link to="/" relative='path' className='text-header-menu letnoselect'>About us</Link>
                    {
                        isStorage() ? (
                            <p className='text-header-menu letnoselect' style={{ color: '#c43' }} onClick={signOff}>Sign off</p>
                        ) : (
                            <>
                                <Link to="/login" relative='path' className='text-header-menu letnoselect'>Log in</Link>
                                <Link to="/register" relative='path' className='text-header-menu letnoselect'>Check in</Link>
                            </>
                        )
                    }
                </div>
            }
            <div className="contain-header-pc">
                <Link to="/" relative='path' className='text-auth-header letnoselect'>Help</Link>
                <Link to="/" relative='path' className='text-auth-header letnoselect'>About us</Link>
                {
                    isStorage() ? (
                        <p className='text-auth-header letnoselect' style={{ color: '#c43' }} onClick={signOff}> Sign off</p>
                    ) : (
                        <>
                            <button className='button-login letnoselect' onClick={navigateLogin}>Log in</button>
                            <button className='button-checkin letnoselect' onClick={navigateRegister}>Check in</button>
                        </>
                    )
                }
            </div>
            <div className="contain-header-phone">
                <IoMdMenu className='icon-phone' onClick={openMenu} size={30} />
            </div>
        </div >
    )
}

export default Auth