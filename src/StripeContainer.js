import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JhxP8Dm8MVDBLYaspRvpTk9p6JKxneOtkdsosshYeDzQa2AhCBGozlUDle9ySlo2ykwe9FQtVqGmoveuQMG2mLY00Za39DRCt";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
