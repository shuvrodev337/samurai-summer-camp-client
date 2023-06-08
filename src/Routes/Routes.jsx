import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserHome from "../pages/Dashboard/UserHome";
import InstructorHome from "../pages/Dashboard/InstructorHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import StudentHome from "../pages/Dashboard/StudentHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
    ],
  },
  {
    path: "/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: "/dashboard/studenthome",
        element:<StudentHome></StudentHome>
      },
      {
        path: "/dashboard/instructorhome",
        element:<InstructorHome></InstructorHome>
      },
      {
        path: "/dashboard/adminhome",
        element:<AdminHome></AdminHome>
      },
      
      // {
      //   path: "/dashboard/userhome",
      //   element:<UserHome></UserHome>
      // },
      
      
    ]
  }
]);

export default router;
