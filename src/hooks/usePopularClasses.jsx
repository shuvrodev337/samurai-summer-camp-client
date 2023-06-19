import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const usePopularClasses = () => {
    const {data:classes=[]} = useQuery({
        queryKey:['popularClasses'],
 
        queryFn: async()=>{
        
            const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/classes/popular`)
            return res.data
        }
    
    })
    
    return [classes]
};

export default usePopularClasses;