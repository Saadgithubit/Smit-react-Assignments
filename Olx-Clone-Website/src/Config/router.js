import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Dashboard from "../Views/Dashboard/dashboard";
import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";
import Details from "../Views/Details/detail";
import Addpost from "../Views/Addpost/addpost";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import MyAdds from "../Views/MyAdds/myadds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Dashboard />,
      },
   
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/addpost",
        element: <Addpost />,
      },
      {
        path: "/myadds",
        element: <MyAdds />,
      },
    ]
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
]);

function Layout() {
  return <div>
    <Header />
    <Outlet/>
    <Footer/>
  </div>
}


function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router