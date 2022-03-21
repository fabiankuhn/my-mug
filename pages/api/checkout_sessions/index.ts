import Stripe from "stripe"
import {NextApiRequest, NextApiResponse} from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
})

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const amount: number = req.body.amount
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'pay',
    payment_method_types: ['card'],
    locale: "de",
    line_items: [
      {
        name: 'Custom amount donation',
        amount: amount,
        currency: "chf",
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };

  return stripe.checkout.sessions.create(params)
    .then(session => res.status(200).json({id: session.id}))
    .catch(err => {
      console.log("Session could not be created", err)
      res.status(500).json({message: "Internal Server error"})
    })
}

export default handler
