
const ClassCard = ({singleClass}) => {
    const {className,instructorEmail,classPhoto,instructorName,availableSeats,price,instructorId,status,enrolledStudents} = singleClass
    return (
        <div className="card lg:card-side bg-slate-100 shadow-xl my-14 border border-2 border-sky-500">
      <figure className="md:w-1/2">
        <img src={classPhoto} alt="Album" className="w-56" />
      </figure>
      <div className="card-body text-gray-900 md:w-1/2">
        <h2 className="font-bold text-2xl text-left mb-10">{className}</h2>
        <p>
          <span className="font-semibold text-lg ">Instructor Name: </span>
          {instructorName}
        </p>
        
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
      </div>
    </div>
    );
};

export default ClassCard;