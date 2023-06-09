import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyClasses = () => {
const {user} = useAuth()
    // TODO Make a hook that load instructor specific classes, use axios secure there.
    const {data:classes=[],refetch} = useQuery(['users'],async()=>{

        const res  = await axios.get(`http://localhost:3000/instructors/classes/${user?.email}`)
        return res.data
    })
    console.log(classes);

    return (
        <div>
            <h2 className="text-3xl">My {classes.length} classes</h2>
        </div>
    );
};

export default MyClasses;