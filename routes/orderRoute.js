const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IG4hAB84gCmikSTtPLbo8p7Pn1KPeyqJ2w2TbxYY8tbYm6u0oqqDlNwzOgOzUe44LwzwVnsb3vw12IJIrDwXXSV00G8HqLX1l"
);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal,
        currency: "NGN",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
