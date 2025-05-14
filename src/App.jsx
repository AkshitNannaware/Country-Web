import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import Applayout from './components/layout/Applayout';
import Errorpage from './pages/Errorpage';
import { CountryDetails } from './components/layout/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<Errorpage/>,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
