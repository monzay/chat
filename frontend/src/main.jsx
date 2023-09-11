import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App';
import { Login } from './form/login';
import { VerificarSesion } from './VerificarSesion';



const router = createBrowserRouter([
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/",
    element:<VerificarSesion/>,
    children:[
      {
        path:"/app",
        element:<App/>
      }
    ]
  }
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
