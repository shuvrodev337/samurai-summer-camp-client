import React from "react";

const EnrolledClassCard = ({ enrolledClass }) => {
  const {
    _id,
    studentEmail,
    transactionId,
    price,

    className,
    selectedClassId,
    classPhoto,
    instructorName,
    instructorId,
  } = enrolledClass;
  return (
    <div className="card shadow-2xl">
      <figure className="px-10 w-96 h-96 mx-auto pt-10 ">
        <img src={classPhoto} alt="Class-photo" className="rounded" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{className}</h2>
        <p>Instructor : {instructorName}</p>
        <p>Price : {price}</p>
      </div>
    </div>
  );
};

export default EnrolledClassCard;
