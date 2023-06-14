import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
const usePopularInstructors = () => {
    const {loading} = useAuth()
    const {data:instructors=[],refetch} = useQuery({
        queryKey:['popularInstructors'],
        enabled: !loading ,
        queryFn: async()=>{
        
            const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/instructors/popular`)
            return res.data
        }
    
    })
    // console.log(instructors);
    return [instructors]
};

export default usePopularInstructors;