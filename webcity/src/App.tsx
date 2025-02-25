import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home'
import Blank from './blank'

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Blank />
    },
    {
      path: '/:passkey',
      element: <Home />,
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

