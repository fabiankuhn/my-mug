import {FormEvent} from "react";
import getStripe from "../utils/stripe.utils";
import {fetchPostJSON} from "../utils/api.utils";
import { Button } from "./Buttons";

type Session = { id: string };

export const BuyButton = () => {

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetchPostJSON(
      '/api/checkout_sessions',
      {amount: 1250},
    )
      .then(redirect)
      .catch((err: Error) => console.log("Payment could not be executed", err))
  };

  const redirect = async (session: Session) => {
    const stripe = await getStripe()
    await stripe!.redirectToCheckout({sessionId: session.id});
  }

  return (
      <Button
        marginY={3}
        type="submit"
        onClick={handleSubmit}
      >
        Buy
      </Button>
  )
}
