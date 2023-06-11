import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const {loading } = useAuth()
    const {data:instructors=[],refetch} = useQuery(['instructors'],async()=>{
// TODO test enabled here
        const res  = await axios.get('http://localhost:3000/instructors')
        return res.data
    })
    console.log(instructors);

    return (
           <>
           <Helmet>
        <title>Samurai Summer Camp | Instructors</title>
      </Helmet>
            <SectionTitle sectionHeading={`All our ${instructors.length} instructors`}></SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {
                instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
        </>
    );
};

export default Instructors;