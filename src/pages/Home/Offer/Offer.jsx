import { Fade } from "react-awesome-reveal";
import img5 from '../../../assets/slider/slider5.jpg'
import SectionTitle from "../../../components/sectionTitle";

const Offer = () => {
    return (
        <div
      className="hero min-h-screen rounded-lg relative "
      style={{
        backgroundImage: `url(${img5})`,
      }}
      data-aos="fade-down"
    >
       
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">

        
        <div className="max-w-4xl">
        <Fade direction="left">
          <SectionTitle sectionHeading={'EXCLUSIVE NEW MEMBER OFFER'} sectionSubHeading={'Receive your first 3 classes + FREE T-Shirt & Martial Arts Belt only $29.95! (Save up to $155)'}></SectionTitle>
          <button className="btn btn-info">Learn More about this offer</button>
        </Fade>
        </div>
      </div>
    </div>
    );
};

export default Offer;