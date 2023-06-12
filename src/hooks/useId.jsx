// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import useAuth from "./useAuth";

// const useId = () => {
//     const {user} = useAuth()
//     // TODO Make a hook that load all users, use axios secure there.
//     const {data:userId,refetch} = useQuery(['users'],async()=>{

//         const res  = await axios.get(`https://samurai-summer-camp-server.vercel.app/users/${user.email}`)
//         return res.data
//     })
//     console.log(usersId);
//     // return [userId, refetch]
// };

// export default useId;