import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from "../../../components/sectionTitle";
const Gallery = () => {

    const { data: approvedClasses = [], refetch ,isLoading} = useQuery(
        {queryKey: ["approvedClasses"],
       //  enabled :!loading ,
        queryFn: async () => {
           
           const res = await axios.get("https://samurai-summer-camp-server.vercel.app/classes/approved");
           return res.data;
         }}
       );
    return (
        <div>
            <SectionTitle sectionHeading={'The Path of Martial Arts'} sectionSubHeading={'A Pictorial Exploration of Discipline and Honor'}></SectionTitle>
            <Carousel className="text-center">

                {
                    approvedClasses.map(singleClass=><div key={singleClass._id} className="max-w-md mx-auto">
                    <img src={singleClass.classPhoto} />

                    </div>)
                }
                
            </Carousel>
        </div>
    );
};

export default Gallery;