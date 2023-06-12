import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/sectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div  className="w-full">
      <div>
        <SectionTitle sectionHeading={"Payment"}></SectionTitle>
      </div>
      <Elements  stripe={stripePromise}>

      <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
