import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../Views/Dashboard/dashboard";
import Details from "../Components/Details/details";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
        path: "/details/:adId",
        element: <Details/>,
      }
  ]);

  function Router(){
    return
    <RouterProvider router={router} />
  }

  export default Router;