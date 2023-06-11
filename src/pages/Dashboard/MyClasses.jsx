import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle";
import ClassCard from "../../components/ClassCard";
import ClassesRow from "./ClassesRow";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
const {user,loading} = useAuth()
    // TODO Make a hook that load instructor specific classes, use axios secure there.
    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        enabled: !loading ,
        queryFn: async()=>{
        //(keep this api call open for any user, because see classes by instructor functionality to be added later)
            const res  = await axios.get(`http://localhost:3000/instructors/classes?email=${user?.email}`)
            return res.data
        }
    
    })
    
    console.log(classes);

    return (
        <div className="w-full">
          <Helmet>
        <title>Samurai Camp | Instructor Classes</title>
      </Helmet>
            <SectionTitle sectionHeading={'My Classes'}></SectionTitle>

            {/* <div className="w-9/12 mx-auto">


            {
                classes.map((singleClass,index)=><ClassCard key={singleClass._id} singleClass={singleClass} index={index}></ClassCard>)
            }

            {


            }

            </div> */}

            <div className="overflow-x-auto  mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th className="text-center">Price</th>
              {/* TODO add enrolled students collumn */}
              <th>Status</th>
              <th>Feedback</th>
              {/* <th className="text-right">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              classes.map((singleClass,index)=> <ClassesRow key={singleClass._id} singleClass={singleClass} index={index}></ClassesRow>)
            }
            
            
          </tbody>
        </table>
      </div>


            



        </div>
    );
};

export default MyClasses;