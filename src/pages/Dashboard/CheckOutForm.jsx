import { CardElement,  useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import './CheckoutForm.css'

const CheckOutForm = ({selectedClass}) => {
  const {_id,className,classPhoto,instructorName,availableSeats,price,instructorId,classId} = selectedClass

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth()
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const navigate = useNavigate()
    const elements = useElements();
const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])



    const handleSubmit = async (event)=>{
        event.preventDefault()

        if (!stripe || !elements) {

            return
        }
        const card  = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        // console.log('card',card);

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('card error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }


        setProcessing(true)


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      email: user?.email || 'unknown email',
                      name: user?.displayName || 'anonymous user'
                  },
              },
          },
      );
      if (confirmError) {
        console.log(confirmError);
    }

    // console.log('payment intent', paymentIntent)
    setProcessing(false)

if (paymentIntent.status === 'succeeded') {
  setTransactionId(paymentIntent.id);
  const payment = {
    studentEmail: user?.email,
    transactionId: paymentIntent.id,
    price,
    date: new Date(),
    quantity: 1,
    className,
    selectedClassId : selectedClass._id,
    classPhoto,
    instructorName,
    instructorId
}


axiosSecure.post('/payments', payment)
                .then(res => {
                  // console.log(res.data);
                  
                    
                  })
                  navigate('/dashboard/student/enrolled-classes')
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Payment successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  console.log(`/classes/update/${classId}`);
                  axiosSecure.patch(`/classes/update/${classId}`)
                  .then(res=>{
                    // console.log(res.data);
                  })
                  axiosSecure.patch(`/instructors/update/${selectedClass?.instructorId}`)
                  .then(res=>{
                    // console.log(res.data);
                  })
                  

}


    }


    return (
        <>
        <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="text-center my-10">
        <button type="submit" className="btn btn-info  w-3/12" disabled={!stripe || !clientSecret || processing }>
          Pay
        </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 font-semibold my-4 ml-14">{cardError}</p>}
         {transactionId && <p className="text-green-500">Transaction Success! TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;