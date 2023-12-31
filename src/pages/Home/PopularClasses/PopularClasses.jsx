import SectionTitle from "../../../components/sectionTitle";
import PopularClassCard from "./PopularClassCard";
import usePopularClasses from "../../../hooks/usePopularClasses";
import ClassCard from "../../../components/ClassCard";
import { Link } from "react-router-dom";

const PopularClasses = () => {


    const [classes] = usePopularClasses()
    return (
        <div>
            <SectionTitle sectionHeading={'Our Most Popular Classes'} sectionSubHeading={"Train with the Best, Discover Our Most Popular Martial Arts Classes"}></SectionTitle>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
             {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  w-9/12 mx-auto my-6 "> */}


            {
                classes.slice(0,6).map((popularClass)=><ClassCard key={popularClass._id} singleClass={popularClass} ></ClassCard>)
            }

            </div>

            <div className="text-center mt-16">
            <Link className=" mt-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg mx-auto" to={"/classes/approved"}>See All Classes</Link>

            </div>
        </div>
    );
};

export default PopularClasses;