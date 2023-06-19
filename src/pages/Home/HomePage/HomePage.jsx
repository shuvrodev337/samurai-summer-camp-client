import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AboutMartialArt from "../../AboutMartialArt/AboutMartialArt";
import OurPartners from "../OurPartners/OurPartners";
import Feedback from "../Feedback/Feedback";
import Testimonials from "../Testimonials/Testimonials";
import Offer from "../Offer/Offer";
import Gallery from "../Gallery/Gallery";

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
      <Gallery></Gallery>
      <Offer></Offer>
      <Testimonials></Testimonials>
      <Feedback></Feedback>
      <OurPartners></OurPartners>
      
    </div>
  );
};

export default HomePage;
