import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../Views/Dashboard/dashboard";
  import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";
import Details from "../Views/Details/detail";
import Addpost from "../Views/Addpost/addpost";
  
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
    {
      path: "/details/:id",
      element: <Details/>,
    },
    {
      path: "/addpost",
      element: <Addpost/>,
    },
  ]);

  function Router(){
    return(
        <RouterProvider router={router} />
    )
  }

  export default Router