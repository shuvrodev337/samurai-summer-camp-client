import { Helmet } from "react-helmet-async";
import useMyClasses from "../../hooks/useMyClasses";
import SectionTitle from "../../components/sectionTitle";
import EnrolledClassCard from "./EnrolledClassCard";

const EnrolledClasses = () => {
  const [enrolledClasses, isEnrolledClassesLoading] = useMyClasses();
  return (
    <div className=" w-full">
      <Helmet>
        <title>Samurai Summer Camp | Enrolled Classes</title>
      </Helmet>
      <SectionTitle sectionHeading={"My Enrolled Classes"}></SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  w-9/12 mx-auto my-6 ">


            {
             !isEnrolledClassesLoading &&   enrolledClasses.map((enrolledClass)=><EnrolledClassCard key={enrolledClass._id} enrolledClass={enrolledClass} ></EnrolledClassCard>)
            }

            {


            }

            </div>

    </div>
  );
};

export default EnrolledClasses;
