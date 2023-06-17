import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import axios from "axios";
import MartialArtCard from "./MartialArtCard";

const AboutMartialArt = () => {
    const {data:martialArts=[],refetch} = useQuery({
        queryKey:['martialArts'],
        // enabled :!loading ,

        queryFn: async () => {
            const res = await axios.get(`https://samurai-summer-camp-server.vercel.app/martialArts`);
            return res.data;
        }

    })
    return (
        <div>
        <SectionTitle sectionHeading={'9 Martial Arts'} sectionSubHeading={'You should know about'}></SectionTitle>
           <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {
                martialArts.map(martialArt=><MartialArtCard key={martialArt._id} martialArt={martialArt}></MartialArtCard>)
            }
           </div>
            
        </div>
    );
};

export default AboutMartialArt;