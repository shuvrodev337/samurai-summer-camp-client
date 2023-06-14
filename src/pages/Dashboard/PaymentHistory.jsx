import { Helmet } from "react-helmet-async";
import useMyClasses from "../../hooks/useMyClasses";
import SectionTitle from "../../components/sectionTitle";
import PaymentHistoryRow from "./PaymentHistoryRow";




const PaymentHistory = () => {

    const [enrolledClasses, isEnrolledClassesLoading] = useMyClasses()

    return (
        <>
      <Helmet>
        <title>Samurai Camp | Payments</title>
      </Helmet>
      <SectionTitle sectionHeading={'All Your Payments'} sectionSubHeading={'Latest on Top'}></SectionTitle>

        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>##</th>
              <th>Class</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>date</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
            !isEnrolledClassesLoading &&  enrolledClasses.map((enrolledClass,index)=> <PaymentHistoryRow key={enrolledClass._id} enrolledClass={enrolledClass} index={index} ></PaymentHistoryRow>)
            }
            
            
          </tbody>
        </table>
      </div>
      
      </>
    );
};

export default PaymentHistory;