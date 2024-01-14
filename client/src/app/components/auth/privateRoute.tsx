import { Navigate, Outlet } from "react-router-dom";

import { isStorage } from '../../helper/storage';

const PrivateRoute = () => {

  return isStorage() ? <Outlet /> : <Navigate to="/" />
  
}

export default PrivateRoute