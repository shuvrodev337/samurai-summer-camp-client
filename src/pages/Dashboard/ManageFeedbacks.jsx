import { Helmet } from "react-helmet-async";
// import useFeedbacks from "../../hooks/useFeedbacks";
import SectionTitle from "../../components/sectionTitle";
import FeedbackRow from "./FeedbackRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageFeedbacks = () => {
    const [axiosSecure]= useAxiosSecure()
    const {data:allFeedbacks=[],refetch} = useQuery(['allFeedbacks'],async()=>{
        // TODO test enabled here 
                const res  = await axiosSecure.get('/admin/all-feedbacks')
                return res.data
            })
      

    // const [feedbacks,refetch] = useFeedbacks()
    return (
        <div className="w-full">
            <Helmet>
        <title>Samurai Camp | Manage Feedbacks</title>
      </Helmet>
      <SectionTitle sectionHeading={'Manage All Feedbacks'}></SectionTitle>

        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allFeedbacks.map((feedback,index)=> <FeedbackRow key={feedback._id} feedback={feedback} index={index} refetch={refetch}></FeedbackRow>)
            }
            
            
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageFeedbacks;