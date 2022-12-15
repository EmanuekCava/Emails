import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from '../../server/actions/user.actions';

const PrivateRoute = () => {

  const { user } = useContext(UserContext)

  return user.token === localStorage.getItem("auth-data") ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute