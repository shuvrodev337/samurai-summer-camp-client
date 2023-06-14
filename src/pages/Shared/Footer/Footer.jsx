import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from '../../../assets/logos/logo1.png'
const Footer = () => {
  const contactEmail = 'shuvrodevmondal337@gmail.com'

    return (
        <footer className="footer  footer-center p-10 bg-base-300 text-base-content  mt-10">
      
      
        <div className="grid grid-flow-col gap-6">
        
          <Link to={"https://www.facebook.com/"}>
            <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
          </Link>
          <Link className="text-2xl text-blue-600" to={"https://twitter.com/"}>
            <FaTwitter></FaTwitter>
          </Link>
          <Link className="text-2xl text-red-600" to={"https://www.instagram.com/"}>
            <FaInstagram></FaInstagram>
          </Link>
          <Link to={`mailto:${contactEmail}`} className="text-2xl text-red-600">
            <FaEnvelope></FaEnvelope>
        </Link>
        
      </div>
      <div className="grid items-center grid-flow-col font-medium ">
        <img src={logo1} alt="Samurai-summer camp-logo" className="h-16" />
        <div className="flex flex-col gap-1">
        <p>Copyright © 2023 - All right reserved By <span className="font-bold text-lg text-red-500">Samurai Summer Camp</span></p>
        <p className="text-sm">A Martial art school for everyone.</p>
        <p>Rampura, Dhaka, Bangladesh.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;