import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_r3PDD8GVws0FRHLUnnBwRShP00AdmcRb3n";

  const onToken = token => {
    const data = {
      amount: priceForStripe,
      token,
    };
    axios
      .post("/payment", data)
      .then(res => alert("Payment Successful"))
      .catch(err => {
        console.log("Payment error: ", err);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Designs Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
