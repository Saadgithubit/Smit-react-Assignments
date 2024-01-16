import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../Views/Dashboard/dashboard";
  import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/signin",
      element: <Signin/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
  ]);

  function Router(){
    return(
        <RouterProvider router={router} />
    )
  }

  export default Router