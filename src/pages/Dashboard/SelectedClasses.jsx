import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SelectedClassCard from "./SelectedClassCard";

const SelectedClasses = () => {

    const {user,loading} = useAuth()
    // TODO Make a hook that load user specific selected classes, use axios secure there.
    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        enabled: !loading ,
        queryFn: async()=>{
        
            const res  = await axios.get(`http://localhost:3000/users/classes?email=${user?.email}`)
            return res.data
        }
    
    })
   


    return (
        <div className="w-full">
            <SectionTitle sectionHeading={`My Classes`}></SectionTitle>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  w-9/12 mx-auto">
            {

classes.map((selectedClass,index)=><SelectedClassCard key={selectedClass._id} selectedClass={selectedClass} index={index}></SelectedClassCard>)

}
            </div>


        </div>
    );
};

export default SelectedClasses;