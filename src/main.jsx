import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Search from "./pages/Search/Search.jsx";
import Auth from "./pages/Authentication/Auth.jsx";
import UserProvider from "./Context/UserContent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Search />,
      },
      {
        path: "/search/:text",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
