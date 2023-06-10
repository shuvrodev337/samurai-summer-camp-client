import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const isAdmin = false
  const isInstructor = false
  const isStudent = true
  

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            // refetch()
            Swal.fire("You have been logged out!");
          })
          .catch((error) => {
            Swal.fire(error.message);
          });
      }
    });
  };

  // Central Nav Buttons
  const centerNavItems = (
    <>
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/instructors"}>Instructors</NavLink>
      <NavLink to={"/classes/approved"}>Classes</NavLink>
      {isAdmin && <NavLink to={"/dashboard/adminhome"}>Dashboard</NavLink>}
      {isInstructor && <NavLink to={"/dashboard/instructorhome"}>Dashboard</NavLink>}
      {isStudent && <NavLink to={"/dashboard/studenthome"}>Dashboard</NavLink>}

    </>
  );

  // Right Side Nav Buttons
  // const endNavItems = (
  //   <>

  //           {user?<>
  //           <NavLink to={"/login"}>Login</NavLink>
  //           <NavLink to={"/signup"}>Sign Up</NavLink>
  //           </>:

  //           <NavLink onClick={handleLogOut}>Log Out</NavLink>

  //           }

  //   </>
  // );
  const endNavItems = (
    <>
      {user?.email ? (
        <>
          <button onClick={handleLogOut}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to={"/signup"}>Sign Up</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </>
      )}
      {user?.photoURL && (
        <div className="tooltip  tooltip-bottom " data-tip={user?.displayName}>
          <img
            className="rounded-full  ring-4 ring-sky-500 hover:ring-sky-600"
            src={user?.photoURL}
            style={{ width: "44px", height: "44px" }}
          />
        </div>
      )}
    </>
  );

  return (
    <div className="navbar h-24 mb-10 px-6 text-slate-500 rounded-lg mt-4 bg-transparent max-w-screen-xl">
      <div className="navbar-start space-x-2">
        {/* <NavLink to={"/"}>
          <img src={websiteLogo} alt="" className="h-20" />
        </NavLink> */}
        <NavLink to={"/"}>
          <h2 className="text-3xl font-bold">Samurai Summer Camp</h2>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-6  items-center">
          {centerNavItems}
        </ul>
      </div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal space-x-6 hidden lg:flex items-center">
          {endNavItems}
        </ul>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-gray-100 rounded-box w-52 items-center gap-2"
          >
            {centerNavItems}
            {endNavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
