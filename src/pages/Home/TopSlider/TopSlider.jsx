// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { motion , useInView,useAnimation} from "framer-motion"

import img1 from '../../../assets/slider/slider1.jpg'
import img2 from '../../../assets/slider/slider2.jpg'
import img3 from '../../../assets/slider/slider3.jpg'
import img4 from '../../../assets/slider/slider4.jpg'
import img5 from '../../../assets/slider/slider5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Fade } from "react-awesome-reveal";

const TopSlider = () => {
  // const ref = useRef(null)
  // const isInView  =  useInView(ref)
  // const maincontrols = useAnimation()
  
  // useEffect(()=>{
  //   if (isInView) {
  //       maincontrols.start("visible")
  //   }
  //       },[isInView,maincontrols])


    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(${img1})`,
      }}
      data-aos="fade-down"
    >
       
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">

        
        <div className="max-w-4xl">
        <Fade direction="left">
          <h1 className="mb-5 text-7xl font-bold">Samurai Summer Camp</h1>
          <p className="mb-5">
          Empower Your Body and Mind: Unleash the Martial Artist in You!
          </p>
          <p className="mb-5">
          Welcome to Samurai Summer School, a place where the timeless spirit of ancient warriors intertwines with cutting-edge training techniques, creating a transformative martial arts experience.
          </p>
          <p className="mt-24">
          <span className="italic">&quot;The ultimate aim of martial arts is not having to use them.&quot;</span> - Miyamoto Musashi
          </p>
          
        </Fade>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(${img2})`,
      }}
      data-aos="fade-down"
    >
        
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold">Samurai Summer Camp</h1>
          <p className="mb-5">
          Unleash Your Potential: Master the Art of Self-Defense!
          </p>
          <p className="mb-5">
          Step into our esteemed dojo and embark on a thrilling martial arts journey like no other at Samurai Summer School, where passion, discipline, and self-discovery converge.
          </p>
          <p className="mt-24">
          <span className="italic">&quot;The fight is won or lost far away from witnesses—behind the lines, in the gym, and out there on the road, long before I dance under those lights.&quot;</span> - Muhammad Ali
          </p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(${img3})`,
      }}
      data-aos="fade-down"
    >
        
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold">Samurai Summer Camp</h1>
          <p className="mb-5">
          Discover Your Inner Strength: Train, Defend, Conquer!
          </p>
          <p className="mb-5">
          Experience the honorable and revered path of the samurai warriors in a dynamic and empowering environment at Samurai Summer School, where tradition meets innovation.
          </p>
          <p className="mt-24">
          <span className="italic">&quot;The true essence of martial arts is not the victory, but the perfection of the character of its participants.&quot;</span> - Gichin Funakoshi
          </p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(${img4})`,
      }}
      data-aos="fade-down"
    >
        
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold">Samurai Summer Camp</h1>
          <p className="mb-5">
          Elevate Your Skills: Unleash the Power of Martial Arts!
          </p>
          <p className="mb-5">
          Immerse yourself in the captivating world of the samurai at Samurai Summer School, where you&apos;ll unlock the secrets of their artistry, discipline, and indomitable spirit.
          </p>
          <p className="mt-24">
          <span className="italic">&quot;A black belt is a white belt who never gave up.&quot;</span> - Unknown
          </p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
      className="hero min-h-screen rounded-lg relative"
      style={{
        backgroundImage: `url(${img5})`,
      }}
      data-aos="fade-down"
    >
        
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-7xl font-bold">Samurai Summer Camp</h1>
          <p className="mb-5">
          Transform Yourself: Embrace the Way of the Warrior!
          </p>
          <p className="mb-5">
          Prepare for an unforgettable summer adventure as you delve into the realm of martial arts at Samurai Summer School, honing your skills and embracing a legacy that transcends time itself.
          </p>
          <p className="mt-24">
          <span className="italic">&quot;Knowing is not enough, we must apply. Willing is not enough, we must do.&quot;</span> - Bruce Lee
          </p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default TopSlider;