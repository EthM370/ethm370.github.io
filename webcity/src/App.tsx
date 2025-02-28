import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter as Routers, Routes, Route } from 'react-router-dom'; 
import Home from './home'
import Blank from './blank'

export const RouterR: React.FC = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Blank />}/>
        <Route path="/:key" element={<Home />}/>
      </Routes>
    </Routers>
  );
}

