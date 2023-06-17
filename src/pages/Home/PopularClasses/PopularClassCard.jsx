// import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal";

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
          <p>{instructorName}</p>
          <p>{price}</p>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassCard;
// bg-gradient-to-b from-sky-100 to-slate-100  text-gray-800