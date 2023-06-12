import { CardElement, useCartElement, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {

    const stripe = useStripe()
    const elements = useCartElement()
    const handleSubmit = async (event)=>{
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card  = elements.getElement(CardElement)
        if (card === null) {
            return
        }

    }



    return (
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
        <button type="submit" className="btn btn-info  w-3/12" disabled={!stripe}>
          Pay
        </button>
        </div>
      </form>
    );
};

export default CheckOutForm;