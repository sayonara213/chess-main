import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from '../../../screens/authorization/Auth';
import Home from '../../../screens/home/Home';
import Lobby from '../../../screens/lobby/Lobby';
import { auth } from '../App';

import Layout from './Layout';

import { ROUTES } from '../../../constants/routes';

const AppRouter: React.FC = () => {
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.game} element={<Lobby />} />
        <Route path='*' element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path={ROUTES.auth.login} element={<Auth isLogin={true} />} />
      <Route path={ROUTES.auth.register} element={<Auth isLogin={false} />} />
      <Route path='*' element={<Navigate to={ROUTES.auth.login} replace />} />
    </Routes>
  );
};

export default AppRouter;
