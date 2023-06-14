import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useInstructor = () => {
const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useAuth()

    const {data: isInstructor, isLoading: isInstructorLoading}= useQuery({
        queryKey:['isInstructor', user?.email],
        enabled :!loading && !!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor?email=${user?.email}`);
            return res.data.instructor;
        }

    })


    return [isInstructor,isInstructorLoading]
};

export default useInstructor;