import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { getAllDataFromFirebase } from "./firebase";
import { useState , useEffect } from "react";

import Dashboard from "../Views/Dashboard/dashboard";
import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";
import Details from "../Views/Details/detail";
import Addpost from "../Views/Addpost/addpost";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import MyAdds from "../Views/MyAdds/myadds";
import EditAdd from "../Components/EditAdd/editadd";

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
      {
        path: "/editadd/:id",
        element: <EditAdd />,
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
  const [products , setproducts] = useState([])

  useEffect(() => {
    getData()
}, [])


async function getData() {
    const data = await getAllDataFromFirebase()
    setproducts(data)

}

if (!products.length) {
    return <div className='w-screen h-screen flex justify-center items-center'>
        <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
            width="30%" alt="" />
    </div>
}
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