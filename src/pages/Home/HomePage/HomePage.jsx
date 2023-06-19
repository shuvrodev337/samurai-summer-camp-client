import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AboutMartialArt from "../../AboutMartialArt/AboutMartialArt";
import OurPartners from "../OurPartners/OurPartners";
import Feedback from "../Feedback/Feedback";
import Testimonials from "../Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="space-y-60">
      <Helmet>
        <title>Samurai Summer Camp | Home</title>
      </Helmet>
      <TopSlider></TopSlider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <AboutMartialArt></AboutMartialArt>
      <Testimonials></Testimonials>
      <Feedback></Feedback>
      <OurPartners></OurPartners>
      
    </div>
  );
};

export default HomePage;
