
const ClassCard = ({singleClass}) => {
    const isAdmin = true
    const {className,instructorEmail,classPhoto,instructorName,availableSeats,price,instructorId,status,enrolledStudents} = singleClass

    // Note: By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.


    //  Approve , deny Functionality




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
            <button className="btn btn-sm btn-success">Approve</button>
            <button className="btn btn-sm btn-warning">Deny</button>
            <button className="btn btn-sm btn-info">Send Feedback</button>
            </div>
            </>
        }
      </div>
    </div>
    
    );
};

export default ClassCard;