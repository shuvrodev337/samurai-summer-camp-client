// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import useFeedbacks from "../../../hooks/useFeedbacks";
import Feedback from "../Feedback/Feedback";
import SectionTitle from "../../../components/sectionTitle";


const Testimonials = () => {

    const [feedbacks] = useFeedbacks()

    return (
        <div>
          <SectionTitle sectionHeading={'Testimonials'} sectionSubHeading={'What our clients said about us'}></SectionTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
            {
                feedbacks.map(feedback=><SwiperSlide key={feedback._id} className="text-center p-16">
                    <div className="space-y-3">
                        <p>&quot;{feedback?.userFeedback}&quot;</p>
                        <p>- {feedback?.name}</p>
                    </div>
                </SwiperSlide>)
            }
            
          
        </Swiper>
      </div>
    );
};

export default Testimonials;