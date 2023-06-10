import { useState } from "react";
import Swal from "sweetalert2";

const ClassCard = ({singleClass,refetch}) => {
    const isAdmin = true
    const {className,instructorEmail,classPhoto,instructorName,availableSeats,price,instructorId,status,enrolledStudents} = singleClass

    // Note: By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.


    //  Approve , deny Functionality

    // const [disabledInstructorBtn,setDisabledInstructorBtn] = useState(false)
    const [disable,setDisable] = useState(false)



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

                    Swal.fire(
                        `${classToBeDenied.className} has been denied`,
                        'success'
                      )  
                }
            })



          
        }
      })
}



    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl my-14 ">
      <figure className="md:w-1/2">
        <img src={classPhoto} alt="Album" className="w-56" />
      </figure>
      <div className="card-body text-gray-900 md:w-1/2">
        <h2 className="font-bold text-2xl text-left mb-10">Class Name: {className}</h2>
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
          <span className="font-semibold text-lg ">Price : $</span>
          {price}
        </p>
        <p>
          <span className="font-semibold text-lg ">Enrolled students: </span>
          {enrolledStudents?enrolledStudents: '0'}
        </p>
        <p>
          <span className="font-semibold text-lg ">Available Seats: </span>
          {availableSeats}
        </p>
        <p>
          <span className="font-semibold text-lg ">Status</span>:{" "}
          {status}
        </p>
        {
            isAdmin && <>
            <div className="flex flex-col md:flex md:flex-row gap-2">
            <button disabled={disable || singleClass.status !== 'pending'} onClick={()=>approveClass(singleClass)} className="btn btn-sm btn-success">Approve</button>
            <button disabled={disable || singleClass.status !== 'pending'} onClick={()=>denyClass(singleClass)} className="btn btn-sm btn-warning">Deny</button>
            <button className="btn btn-sm btn-info">Send Feedback</button>
            </div>
            </>
        }
      </div>
    </div>
    
    );
};

export default ClassCard;