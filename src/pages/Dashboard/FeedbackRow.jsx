import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FeedbackRow = ({feedback,index,refetch}) => {
  const [axiosSecure]=useAxiosSecure()
const [disable,setDisable] = useState(false)


  const approveFeedback = feedbackToBepproved=>{
    if (feedbackToBepproved.status === 'approved') {
      setDisable(true)
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: `You want to approve this feedback?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do It!'
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.patch(`/feedbacks/approved/${feedbackToBepproved._id}`)
          .then(res => {
              if (res.data.modifiedCount > 0) {
                  // setDisabledInstructorBtn(true)
                  // setDisabledAdminBtn(false)
                  setDisable(true)
                  refetch()

                  

                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Feedback approved',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })



        
      }
    })
  }
    return (
        
        <tr >
                  <th>{index + 1}</th>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.userFeedback}</td>
              <td className="text-right">
                {/* <button disabled={disabledAdminBtn || user.role === 'admin'} onClick={()=>makeAdmin(user)} className="btn btn-xs btn-warning"><FaUserShield></FaUserShield>Make Admin</button> 
                <button disabled={disabledInstructorBtn || user.role === 'instructor'} onClick={()=>makeInstructor(user)} className="btn btn-xs btn-success"><FaUserNinja></FaUserNinja>Make Instructor</button>
               */}
               <button
               onClick={()=>approveFeedback(feedback)}
               disabled={disable || feedback.status === 'approved'} 
               className="btn btn-xs btn-info rounded-full">Approve</button>
              </td>
                </tr>
    );
};

export default FeedbackRow;