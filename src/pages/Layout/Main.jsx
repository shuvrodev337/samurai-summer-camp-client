import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { motion , useInView,useAnimation} from "framer-motion"
import { useEffect, useRef } from "react";

const Main = () => {

    const ref = useRef(null)
    const isInView  =  useInView(ref,{once:true})
    const maincontrols = useAnimation()

    useEffect(()=>{
if (isInView) {
    maincontrols.start("visible")
}
    },[isInView,maincontrols])

    return (
        <div className="">
            <Navbar></Navbar>
            <div ref={ref} className=" min-h-[calc(100vh-372px)] max-w-screen-xl mx-auto">
                <motion.div
                variants={{
                    hidden:{opacity:0, y:75},
                    visible:{opacity:1, y:0}
                }}
                initial= "hidden"
                animate = {maincontrols}
                transition={{duration:0.5,delay:0.25}}
                >

            <Outlet></Outlet>
                </motion.div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;