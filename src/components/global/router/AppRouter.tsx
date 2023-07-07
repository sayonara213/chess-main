import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';

import Home from '../../../screens/home/Home';
import Layout from './Layout';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
