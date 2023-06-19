// import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularClassCard = ({ popularClass }) => {
  const {
    _id,
    className,
    classPhoto,
    instructorName,
    availableSeats,
    price,
    instructorId,
  } = popularClass;

  return (
    <Fade direction="left">
      <div className="card shadow-2xl ">
        <figure className="px-10 w-56 h-56 md:w-96 md:h-96 mx-auto pt-10 ">
          <img src={classPhoto} alt="Class-photo" className="rounded" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{className}</h2>
          <p>Istructor {instructorName}</p>
          <p>Enrollment Price ${price} only</p>
          {
            availableSeats === 0 ?
          <p>No seat available</p>:
          <p>{availableSeats} seats available</p>
          }
          <Link className="btn btn-sm rounded-full mt-2" to={"/classes/approved"}>See All Classes</Link>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassCard;
// bg-gradient-to-b from-sky-100 to-slate-100  text-gray-800