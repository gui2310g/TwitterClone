import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import App from "./App.jsx"
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Widgets from './assets/components/widget/Widgets.jsx';
import NotFoundPage from './pages/NotFoundPage/NoutFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    ]
  },
],

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
