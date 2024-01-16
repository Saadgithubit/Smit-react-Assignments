import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../Views/Dashboard/dashboard";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
  ]);

  function Router(){
    return(
        <RouterProvider router={router} />
    )
  }

  export default Router