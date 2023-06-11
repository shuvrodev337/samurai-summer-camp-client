import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/sectionTitle";
import axios from "axios";
import ClassCard from "../../components/ClassCard";
import { Helmet } from "react-helmet-async";

const ApprovedClasses = () => {
  //  TODO write a hook that returns allclasses, instructor-specific-classes, approved-classes
  const { data: approvedClasses = [], refetch } = useQuery(
    ["approvedClasses"],
    async () => {
      // TODO test enabled here
      const res = await axios.get("http://localhost:3000/classes/approved");
      return res.data;
    }
  );
  console.log(approvedClasses);

  return (
    <div>
      <Helmet>
        <title>Samurai Summer Camp | Classes</title>
      </Helmet>
      <SectionTitle
        sectionHeading={`All ${approvedClasses.length} classes`}
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
    </div>
  );
};

export default ApprovedClasses;
