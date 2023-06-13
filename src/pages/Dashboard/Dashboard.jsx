import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Helmet } from "react-helmet-async";
import { FaHome,FaTools,FaToolbox, FaBook, FaPlusSquare, FaWallet , FaUser, FaUserNinja, FaUserShield} from "react-icons/fa";

import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const user = useAuth()

  const [isAdmin] = useAdmin()
  const [isInstructor]= useInstructor()
  return (
    <>
    <Helmet>
        <title>Samurai Camp | Dashboard | Home</title>
      </Helmet>

    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-info drawer-button lg:hidden my-6"
        >
          Open Sidebar
        </label>
      </div>
      <div className="drawer-side">
          <Fade direction="left">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-900 text-sky-500">
          {/* Sidebar content here */}
         

     {user && <>
      {
        isAdmin?( <>
          <li>
            <NavLink to={"/dashboard/adminhome"}>
              <FaUserShield></FaUserShield>
              Admin Home</NavLink>
          </li>
          <li>
            
            <NavLink to={"/dashboard/manageusers"}>
            <FaTools></FaTools>
              Manage Users</NavLink>
          </li>
          <li>
            
            <NavLink to={"/dashboard/manageclasses"}>
            <FaToolbox></FaToolbox>
              Manage Classes</NavLink>
          </li>
        </>):
        isInstructor?(<>
          <li>
            <NavLink to={"/dashboard/instructorhome"}>
              <FaUserNinja></FaUserNinja>
              Instructor Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/instructors/classes`}>
              <FaBook></FaBook>
              My Classes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addaclass"}>
              <FaPlusSquare></FaPlusSquare>
              Add a Class
            </NavLink>
          </li>
        </>):
        (
          <>
              <li>
                <NavLink to={"/dashboard/studenthome"}>
                  <FaUser></FaUser>
                   Student Home</NavLink>
              </li>
              <li>

                <NavLink to={"/dashboard/student/classes"}>
              <FaBook></FaBook>
                  My Classes</NavLink>
              </li>
              
              <li>
                <NavLink to={"/dashboard/student/paymenthistory"}>
                  <FaWallet></FaWallet>
                  Payment History</NavLink>
              </li>
            </>
        )
      }
      </>
      }

          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home</NavLink>
          </li>
        </ul>
    </Fade>
      </div>
    </div>

    </>
  );
};

export default Dashboard;
