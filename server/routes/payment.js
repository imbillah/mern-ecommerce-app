import express from "express";
import stripe from "stripe";

const router = express.Router();

const stripeClient = stripe(process.env.STRIPE_API);

router.post("/payment", async (req, res) => {
  try {
    const charge = await stripeClient.charges.create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.tokenId,
    });
    res.status(200).json({ status: "success", charge });
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
