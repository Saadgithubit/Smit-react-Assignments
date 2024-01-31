import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../Views/Dashboard/dashboard";
import Weather from "../Components/Weather/weather";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
        path: "/weather",
        element: <Weather/>,
      },
  ]);
  

  function Router(){
    return(

        <RouterProvider router={router} />
    )
  }

  export default Router