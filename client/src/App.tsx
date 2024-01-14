import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './app/components/header/header';

import Index from './app/routes/index.routes';
import Login from './app/routes/login.routes';
import Main from './app/routes/main.routes';
import Register from './app/routes/register.routes';

import PrivateRoute from './app/components/auth/privateRoute';

import { UserContextGlobal } from './app/server/actions/user.actions';
import { EmailContextGlobal } from './app/server/actions/email.actions';

function App() {

  return (
    <BrowserRouter>
      <UserContextGlobal>
        <EmailContextGlobal>
          <Header />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/main' element={<PrivateRoute />}>
              <Route path='/main' element={<Main />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </EmailContextGlobal>
      </UserContextGlobal>
    </BrowserRouter>
  );
}

export default App;
