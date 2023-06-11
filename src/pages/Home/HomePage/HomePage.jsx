import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Samurai Summer Camp | Home</title>
      </Helmet>
      <TopSlider></TopSlider>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default HomePage;
