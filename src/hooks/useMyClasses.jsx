import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useAuth()

    const {data: enrolledClasses, isLoading: isEnrolledClassesLoading}= useQuery({
        queryKey:['enrolledClasses', user?.email],
        enabled :!loading && !!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/enrolledClasses?email=${user?.email}`);
            console.log(res.data);
            return res.data;
        }

    })
    console.log(enrolledClasses);
    return [enrolledClasses,isEnrolledClassesLoading]
};

export default useMyClasses;