import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFeedbacks = () => {
    // const url = `https://samurai-summer-camp-server.vercel.app/users/feedbacks`
    const {data:feedbacks=[],refetch} = useQuery({
        queryKey:['feedbacks'],
 
        queryFn: async()=>{
        
            const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/users/feedbacks`)
            return res.data
        }
    
    })
    
    return [feedbacks,refetch]
};

export default useFeedbacks;