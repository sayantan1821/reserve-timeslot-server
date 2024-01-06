const express = require("express");
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/", async (req, res) => {
  const { token, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: "usd",
      payment_method: token,
      confirm: true,
    });

    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Payment failed." });
  }
});
module.exports = router;
