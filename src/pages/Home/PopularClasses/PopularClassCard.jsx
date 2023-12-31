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
      <div className="shadow-2xl rounded-3xl  p-6  space-y-2 flex flex-col h-400">
        
        <div className="flex-1 overflow-hidden">
        <img src={classPhoto} alt="class-photo" className="h-64 w-full object-cover hover:scale-125 duration-1000"/>
      </div>
        <div className="mt-auto">
          <h3 className="mb-2 mt-2 text-xl font-medium"> {className}</h3>
          <p  className="mb-2">Istructor : {instructorName}</p>
          <p  className="mb-2">Enrollment Price : ${price} only</p>
          <p  className="mb-2">Available Seats : {availableSeats?`${availableSeats}`:'None'}</p>
          
          <Link className="btn btn-sm rounded-full" to={"/classes/approved"}>See All Classes</Link>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassCard;