import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../Views/Dashboard/dashboard";
import Details from "../Components/Details/details";
import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
        path: "/details/:adId",
        element: <Details/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      }
  ]);

  function Router(){
    return (

      <RouterProvider router={router} />
    )
  }

  export default Router;