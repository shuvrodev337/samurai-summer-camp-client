import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/sectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const selectedClass = location.state;

  const price = selectedClass.price;
  const classPrice = parseFloat(price.toFixed(2));
  //  console.log(classPrice);
  return (
    <div className="w-full">
      <div>
        <SectionTitle sectionHeading={"Payment"}></SectionTitle>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm  selectedClass={selectedClass}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
