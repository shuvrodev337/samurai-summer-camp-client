import axios from "axios";
import SectionTitle from "../../../components/sectionTitle";
import useAuth from "../../../hooks/useAuth";
import PopularClassCard from "./PopularClassCard";
import { useQuery } from "@tanstack/react-query";
import usePopularClasses from "../../../hooks/usePopularClasses";

const PopularClasses = () => {
// const {loading} = useAuth()
//     const {data:classes=[],refetch} = useQuery({
//         queryKey:['popularClasses'],
//         enabled: !loading ,
//         queryFn: async()=>{
        
//             const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/classes/popular`)
//             return res.data
//         }
    
//     })
//     console.log(classes);

    const [classes] = usePopularClasses()
    return (
        <div>
            <SectionTitle sectionHeading={'Most Popular Classes'}></SectionTitle>

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