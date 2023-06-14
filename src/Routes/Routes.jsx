import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layout/Main";
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
import HomePage from "../pages/Home/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Payment from "../pages/Dashboard/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/paymentHistory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
      },
      {
        path: "/dashboard/student/selected-classes",
        element:<PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>
      },
      {
        path: "/dashboard/student/enrolled-classes",
        element:<PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
      },
      {
        path: "/dashboard/student/payment",
        element:<PrivateRoute><Payment></Payment></PrivateRoute>
        
      },
      {
        path: "/dashboard/student/paymenthistory",
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        
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
