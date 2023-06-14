import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [ isInstructor, isInstructorLoading] = useInstructor()

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    }
    if (user && isInstructor) {
        return children
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>


}
export default InstructorRoute;