import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {createBrowserRouter, 
  RouterProvider, Link, 
  Route} from "react-router-dom"
import Main from './LayOut/Main.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
