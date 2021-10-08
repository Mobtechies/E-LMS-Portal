import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {

			iconColor: "white",
			color: "white",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color:  "green" },
			"::placeholder": { color: "lightgrey" }
		},
		invalid: {
			iconColor: "red",
			color: "white"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 52655,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form style = {{ width: "50%", marginLeft: "25%" , paddingTop: "5%" }} onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div  className="FormRow">
                    <CardElement  options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2 style = {{color: "green", paddingTop: "25px", marginLeft : "20%"}} >YOUR PAYMENT HAS BEEN SUBMITTED SUCESSFULLY</h2>
       </div> 
        }
            
        </>
    )
}