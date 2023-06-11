import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const user = useAuth()
  const isAdmin = true;
  const isInstructor = false;
  const isStudent = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-900 text-sky-500">
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <li>
                <NavLink to={"/dashboard/adminhome"}>Admin Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageusers"}>Manage Users</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageclasses"}>Manage Classes</NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <NavLink to={"/dashboard/instructorhome"}>
                  Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/instructors/classes`}>
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addaclass"}>
                  Add a Class
                </NavLink>
              </li>
            </>
          )}
          {isStudent && (
            <>
              <li>
                <NavLink to={"/dashboard/studenthome"}>Student Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/student/classes"}>My Classes</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/payment"}>Payment History</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
