import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SelectedClassCard = ({selectedClass, refetch}) => {
  const [axiosSecure] = useAxiosSecure()
  const navigate = useNavigate()
    const {_id,className,classPhoto,instructorName,availableSeats,price,instructorId} = selectedClass


    const pay =()=>{
      // navigate('/dashboard/student/payment',{state:{price:price}})
      navigate('/dashboard/student/payment',{state:selectedClass})
    }
    const deleteClass =()=>{
      axiosSecure.delete(`/users/selectedclass/${_id}`)
      .then(res=>{
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${className} deleted from list !!`,
            showConfirmButton: false,
            timer: 1500
        });
        }
      })
    }
    return (
        <div className="card bg-slate-100 text-gray-800  shadow-2xl">
        <figure className="px-10 w-56 mx-auto pt-10 ">
          <img src={classPhoto} alt="Shoes" className="rounded" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class name : {className}</h2>
          <p>Instructor : {instructorName}</p>
          <p>Available Seats : {availableSeats}</p>
          <p>Price: {price}</p>
          <div className="flex items-centerc gap-4 ">
            
            <button onClick={deleteClass} className="btn btn-warning">Delete</button>
            <button onClick={pay} className="btn btn-info">Pay</button>
          </div>
        </div>
      </div>
    );
};

export default SelectedClassCard;