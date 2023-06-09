import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle";
import ClassCard from "../../components/ClassCard";

const MyClasses = () => {
const {user,loading} = useAuth()
// const instructorEmail = useParams()
    // TODO Make a hook that load instructor specific classes, use axios secure there.
    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        enabled: !loading ,
        queryFn: async()=>{
        
            const res  = await axios.get(`http://localhost:3000/instructors/classes?email=${user?.email}`)
            return res.data
        }
    
    })
    // const {data:classes=[],refetch} = useQuery(['classes',user?.email],async()=>{
        
    //     const res  = await axios.get(`http://localhost:3000/instructors/classes?email=${user?.email}`)
    //     return res.data
    // })
    console.log(classes);

    return (
        <div className="w-full">
            <SectionTitle sectionHeading={'My Classes'}></SectionTitle>

            <div className="w-9/12 mx-auto">


            {
                classes.map((singleClass,index)=><ClassCard key={singleClass._id} singleClass={singleClass} index={index}></ClassCard>)
            }
            </div>



        </div>
    );
};

export default MyClasses;