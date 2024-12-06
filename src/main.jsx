import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Main from './Components/Main'
import Mentor from './Components/Mentor'
import Slider from './Components/Slider'
import Path from './Components/Path'
import Riview from './Components/Riview'
import Blog from './Components/Blog'
import "./index.css"
import Carrer from './Components/Carrer'
import City from './Components/City'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Mentee from './Components/Mentee'
import Dashboard from './Components/Dashboard'
import Regeister from './Components/Regeister'
import Login from './Components/Login'
import Blogsection from './Components/Blogsection'

import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/mentee",
    element:<Mentee/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/regeister",
    element:<Regeister/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/blogsection",
    element:<Blogsection/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
