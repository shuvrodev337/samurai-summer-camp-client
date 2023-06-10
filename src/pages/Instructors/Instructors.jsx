import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";

const Instructors = () => {
    const {loading } = useAuth()
    const {data:instructors=[],refetch} = useQuery(['instructors'],async()=>{
// test enabled here
        const res  = await axios.get('http://localhost:3000/instructors')
        return res.data
    })
    console.log(instructors);

    return (
        <div>
            <SectionTitle sectionHeading={`All our ${instructors.length} instructors`}></SectionTitle>
        </div>
    );
};

export default Instructors;