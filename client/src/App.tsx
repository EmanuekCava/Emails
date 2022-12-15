import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './app/components/header/header';

import Index from './app/routes/index.routes';
import Login from './app/routes/login.routes';
import Main from './app/routes/main.routes';
import Register from './app/routes/register.routes';

import PrivateRoute from './app/components/auth/privateRoute';

import { UserContext, UserContextGlobal } from './app/server/actions/user.actions';
import { EmailContextGlobal } from './app/server/actions/email.actions';

function App() {

  const [isIndex, setIsIndex] = useState(true)

  const { isLoggedIn } = useContext(UserContext)

  return (
    <BrowserRouter>
      <UserContextGlobal>
        <EmailContextGlobal>
          {
            isIndex && <Header />
          }
          <Routes>
            <Route path='/' element={<Index setIsIndex={setIsIndex} />} />
            <Route path='/login' element={isLoggedIn ? <Navigate to='/main' /> : <Login setIsIndex={setIsIndex} />} />
            <Route path='/register' element={isLoggedIn ? <Navigate to='/main' /> : <Register setIsIndex={setIsIndex} />} />
            <Route path='/main' element={<PrivateRoute />}>
              <Route path='/main' element={<Main setIsIndex={setIsIndex} />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </EmailContextGlobal>
      </UserContextGlobal>
    </BrowserRouter>
  );
}

export default App;
