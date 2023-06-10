import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ClassCard = ({singleClass,refetch}) => {
    const isAdmin = false
    const isInstructor = true
    const isStudent = false

    const {_id,className,instructorEmail,classPhoto,instructorName,availableSeats,price,instructorId,status,enrolledStudents} = singleClass
    const { register,reset, handleSubmit, formState: { errors } } = useForm();

      



    //-----Approve, Deny, Feedback Functionality----//
    const [disable,setDisable] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
// Approve class
const approveClass = classToBeApproved =>{

    if (classToBeApproved.status === 'approved') {
        return;
      }

    Swal.fire({
        title: 'Are you sure?',
        text: `You want to approve ${classToBeApproved.className} class?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Do It!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/classes/approved/${classToBeApproved._id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // setDisabledInstructorBtn(true)
                    // setDisabledAdminBtn(false)
                    setDisable(true)
                    refetch()

                    Swal.fire(
                        `${classToBeApproved.className} has been approved`,
                        'success'
                      )  
                }
            })



          
        }
      })
}
// Deny class
const denyClass = classToBeDenied =>{

    if (classToBeDenied.status === 'denied') {
        return;
      }

    Swal.fire({
        title: 'Are you sure?',
        text: `You want to deny ${classToBeDenied.className} class?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Do It!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/classes/denied/${classToBeDenied._id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // setDisabledInstructorBtn(true)
                    // setDisabledAdminBtn(false)
                    setDisable(true)
                    refetch()

                    Swal.fire({
                      title: `${classToBeDenied.className} class is denied`,
                      text: "Do you want to give a feedback to instructor?",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, I want to send Feedback!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        openModal()
                      }
                    })
                }
            })



          
        }
      })
}
// Send Feedback
const onSubmit = (data)=>{
console.log(data.feedback);
console.log(instructorEmail);
closeModal()

axios.patch(`http://localhost:3000/classes/feedback/${_id}`,{feedback:data.feedback})
.then(res=>{
  if (res.data.modifiedCount > 0) {
    // console.log(res.data);
    // alert('Feedback sent')
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Feedback sent',
      showConfirmButton: false,
      timer: 1500
    })
  }
})

}
//--------------------------------------------------//

    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl my-14 items-center text-center">
      <figure className="md:w-1/2">
        <img src={classPhoto} alt="Album" className="w-56" />
      </figure>
      <div className="card-body text-gray-900 md:w-1/2">
        <h2 className="font-bold text-2xl text-center mb-10">Class Name: {className}</h2>
        <p>
          <span className="font-semibold text-lg ">Instructor Name: </span>
          {instructorName}
        </p>
        {
            isAdmin && <>
            <p>
          <span className="font-semibold text-lg ">Instructor Email: </span>
          {instructorEmail}
        </p>
            
            </>

        }
        <p>
          <span className="font-semibold text-lg ">Available Seats: </span>
          {availableSeats}
        </p>
        <p>
          <span className="font-semibold text-lg ">Price : $</span>
          {price}
        </p>
        {isInstructor && <p>
          <span className="font-semibold text-lg ">Enrolled students: </span>
          { enrolledStudents ? enrolledStudents : '0'}
        </p>}
        
        {(isAdmin || isInstructor) && <p>
          <span className="font-semibold text-lg ">Status</span>:{" "}
          {status}
        </p>}
        {
            isAdmin && <>
            <div className="flex flex-col md:flex md:flex-row gap-2 items-center justify-center">
            <button disabled={disable || singleClass.status !== 'pending'} onClick={()=>approveClass(singleClass)} className="btn btn-sm btn-success">Approve</button>
            <button disabled={disable || singleClass.status !== 'pending'} onClick={()=>denyClass(singleClass)} className="btn btn-sm btn-warning">Deny</button>
            {/* <button onClick={()=>sendFeedBack(singleClass)} className="btn btn-sm btn-info">Send Feedback</button> */}
            <div>
      <button
        className="btn btn-sm btn-info"
        onClick={openModal}
      >
        Send Feedback
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="bg-white p-8 w-1/2 mx-auto rounded-lg z-50">
            <h2 className="text-xl font-semibold mb-4">Send Feedback to Instructor</h2>
            <p className="mb-2 text-gray-500">Approved or denied reason...?</p>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
            
          <textarea {...register("feedback", { required: true })} className="textarea textarea-info" placeholder="Feedback"></textarea>
          {errors.feedback?.type === "required" && (
                  <p className="text-red-800 text-sm">Can not submit without feedback!</p>
                )}
          <div className="flex gap-2 justify-end">
       
            
       <button
       type="button"
         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
         onClick={closeModal}
       >
         Cancel
       </button>
       <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" value="Send" />

          </div>
            </form>
          </div>
        </div>
      )}
    </div>

            </div>
            </>
        }
       

       
       <button disabled={isAdmin || isInstructor} className="btn btn-info w-1/2 mt-4 rounded-full mx-auto">Select</button>

       
        
      </div>
    </div>
    
    );
};

export default ClassCard;




// Image
// Name
// Instructor name
// Available seats
// Price
// Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
// Available seats are 0
// Logged in as admin/instructor
// The class card background will be red if the available seats are 0.