const InstructorCard = ({ instructor }) => {
  const { photo, name, email } = instructor;
  return (
    <div className="card    shadow-2xl">
      <figure className="px-10 pt-10 ">
        <img src={photo} alt="Shoes" className="rounded-full w-44 h-44" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
        {/* TODO load some instructor specific info (optional, use a hook to load instructor specific data) */}
      </div>
    </div>
  );
};

export default InstructorCard;
