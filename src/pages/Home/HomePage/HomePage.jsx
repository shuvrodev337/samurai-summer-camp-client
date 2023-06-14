import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AboutMartialArt from "../../AboutMartialArt/AboutMartialArt";

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
      
    </div>
  );
};

export default HomePage;
