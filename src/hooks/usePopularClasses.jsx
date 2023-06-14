import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const usePopularClasses = () => {
    const {loading} = useAuth()
    const {data:classes=[],refetch} = useQuery({
        queryKey:['popularClasses'],
        // enabled: !loading ,
        queryFn: async()=>{
        
            const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/classes/popular`)
            return res.data
        }
    
    })
    console.log(classes);
    return [classes]
};

export default usePopularClasses;