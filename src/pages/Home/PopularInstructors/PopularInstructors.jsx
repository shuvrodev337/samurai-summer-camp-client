import SectionTitle from "../../../components/sectionTitle";
import usePopularInstructors from "../../../hooks/usePopularInstructors";
import InstructorCard from "../../Instructors/InstructorCard";

const PopularInstructors = () => {
//   const [classes] = usePopularClasses();
const [instructors] = usePopularInstructors()
  return (
    <div>
      <SectionTitle sectionHeading={"Our Most Popular Instructors"}></SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {
                instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
    </div>
  );
};

export default PopularInstructors;
