import { Link, useNavigate } from "react-router-dom";

const SelectedClassCard = ({selectedClass, refetch}) => {
  const navigate = useNavigate()
    const {_id,className,classPhoto,instructorName,availableSeats,price,instructorId} = selectedClass


    const pay =()=>{
      // navigate('/dashboard/student/payment',{state:{price:price}})
      navigate('/dashboard/student/payment',{state:selectedClass})
    }
    return (
        <div className="card bg-slate-100 text-gray-800  shadow-2xl">
        <figure className="px-10 w-56 mx-auto pt-10 ">
          <img src={classPhoto} alt="Shoes" className="rounded" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class name {className}</h2>
          <p>Instructor : {instructorName}</p>
          <p>Available Seats : {availableSeats}</p>
          <p>Price: {price}</p>
          <div className="card-actions ">
            
            <button onClick={pay} className="btn btn-info">Pay</button>
            <button className="btn btn-warning">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default SelectedClassCard;