import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RickAndMorty from './components/RickAndMorty.jsx'
import DisplayData from './components/DisplayData.jsx'
import User from './components/users/User.jsx'
import UserList from './components/users/UserList.jsx'


//Create browser router will be used to define the various paths in our application
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rick-and-morty",
    element: <RickAndMorty />,
  },
  {
    path: "/display-data",
    element: <DisplayData />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    //dynamc route
    path: "/users/:id",
    element: <User />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
