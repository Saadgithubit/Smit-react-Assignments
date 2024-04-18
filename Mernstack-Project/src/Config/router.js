import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../Views/Dashboard/dashboard";
import Details from "../Components/Details/details";
import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";
import Postadd from "../Components/PostAdds/postAdds";
import Cart from "../Views/Cart/cart";

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
      },
      {
        path: "/postadd",
        element: <Postadd/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
  ]);

  function Router(){
    return (

      <RouterProvider router={router} />
    )
  }

  export default Router;