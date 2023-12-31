import SectionTitle from "../../../components/sectionTitle";
import PopularClassCard from "./PopularClassCard";
import usePopularClasses from "../../../hooks/usePopularClasses";

const PopularClasses = () => {


    const [classes] = usePopularClasses()
    return (
        <div>
            <SectionTitle sectionHeading={'Our Most Popular Classes'} sectionSubHeading={"Train with the Best, Discover Our Most Popular Martial Arts Classes"}></SectionTitle>

             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  w-9/12 mx-auto my-6 ">


            {
                classes.slice(0,6).map((popularClass)=><PopularClassCard key={popularClass._id} popularClass={popularClass} ></PopularClassCard>)
            }

            {


            }

            </div>
        </div>
    );
};

export default PopularClasses;