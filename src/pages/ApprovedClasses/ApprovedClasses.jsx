import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import axios from "axios";
import ClassCard from "../../components/ClassCard";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion"
const ApprovedClasses = () => {
  const {loading } = useAuth()
  //  TODO write a hook that returns allclasses, instructor-specific-classes, approved-classes
  const { data: approvedClasses = [], refetch ,isLoading} = useQuery(
   {queryKey: ["approvedClasses"],
  //  enabled :!loading ,
   queryFn: async () => {
      
      const res = await axios.get("https://samurai-summer-camp-server.vercel.app/classes/approved");
      return res.data;
    }}
  );
  // console.log(approvedClasses);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Helmet>
        <title>Samurai Summer Camp | Classes</title>
      </Helmet>
      <SectionTitle
        sectionHeading={`All Our ${isLoading?'': approvedClasses.length} classes`}
      ></SectionTitle>

      <div className="w-9/12 mx-auto">
        {approvedClasses.map((singleClass, index) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
            index={index}
          ></ClassCard>
        ))}

        {}
      </div>
    </motion.div>
  );
};

export default ApprovedClasses;
