import React from "react";
import './styles.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Register from "./pages/Register";

const Layout = ()=>{
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]
  },
  {
    path: "/register",
    element: <div><Register/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/about",
    element: <div><Register/></div>,
  },
]);


function App() {
  return (
    <div className="app">
     <div className="container">
       <RouterProvider router = {router} />
     </div>
    </div>
  );
}

export default App;
