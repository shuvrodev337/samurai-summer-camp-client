import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SelectedClassCard from "./SelectedClassCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const SelectedClasses = () => {

    const {user,loading} = useAuth()
const [axiosSecure]= useAxiosSecure()

    // TODO Make a hook that load user specific selected classes, use axios secure there.
    //Loading User Selected classes
    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        enabled: !loading ,
        queryFn: async()=>{
        
            const res  = await axiosSecure.get(`/users/classes?email=${user?.email}`)
            return res.data
        }
    
    })
   


    return (
        <div className="w-full">
            <SectionTitle sectionHeading={`My Classes`}></SectionTitle>
            <Helmet>
        <title>Samurai Camp | Selected Classes</title>
      </Helmet>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  w-9/12 mx-auto my-6">
            {

classes.map((selectedClass,index)=><SelectedClassCard key={selectedClass._id} selectedClass={selectedClass} index={index} refetch={refetch}></SelectedClassCard>)

}
            </div>


        </div>
    );
};

export default SelectedClasses;