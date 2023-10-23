import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Women from './Pages/Women/Women';
import Men from './Pages/Men/Men';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [{
      path : '/',
      element : <Home></Home>
    },
    {
      path : '/women',
      element : <Women></Women>
    },
    {
      path : '/men',
      element : <Men></Men>
    }
  
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
