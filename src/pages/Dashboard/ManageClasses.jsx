import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ClassCard from "../../components/ClassCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageClasses = () => {
const {loading} = useAuth()
const [axiosSecure]= useAxiosSecure()

    const {data:classes=[],refetch} = useQuery(['classes'],async()=>{
// TODO test enabled here 
        const res  = await axiosSecure.get('/classes')
        return res.data
    })
    console.log(classes);

    return (
        <div className="w-full">
            <SectionTitle sectionHeading={`Manage All ${classes.length} Classes`}></SectionTitle>
            <div className="w-9/12 mx-auto">
                {
                    classes.map(singleClass =><ClassCard key={singleClass._id} singleClass={singleClass} refetch={refetch}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;