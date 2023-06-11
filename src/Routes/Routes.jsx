import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import InstructorHome from "../pages/Dashboard/InstructorHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import StudentHome from "../pages/Dashboard/StudentHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddAClass from "../pages/Dashboard/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses";
import Instructors from "../pages/Instructors/Instructors";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../pages/Dashboard/SelectedClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";


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
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes/approved",
        element: <ApprovedClasses></ApprovedClasses>
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "/dashboard/studenthome",
        element:<StudentHome></StudentHome>
      },
      {
        path: "/dashboard/student/classes",
        element:<SelectedClasses></SelectedClasses>
      },
      {
        path: "/dashboard/instructorhome",
        element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path: "/dashboard/adminhome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "/dashboard/manageclasses",
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "/dashboard/manageusers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      
      {
        path: "/dashboard/addaclass",
        element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },
      {
        path: "/dashboard/instructors/classes",
        element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      
      
    ]
  }
]);

export default router;
