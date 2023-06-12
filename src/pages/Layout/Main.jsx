import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div  className=" min-h-[calc(100vh-372px)]">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;