const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");
const dotenv = require('dotenv');
dotenv.config(); 
const stripe = require("stripe")(process.env.STRIKE_API_KEY_TEST)
 

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
      const newOrder = new Order({
        fullName: currentUser.fullName,
        userid: currentUser._id,
        email: currentUser.email,
        orderItems: cartItems,
        orderAmount: subTotal / 100,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipcode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.send("Order Placed Successfully");
      // res.status(202).json(newOrder)
    } else {
      res.send("Payment Failed");
      // res.status(404).json(newOrder)
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid: userid }).sort({_id: -1});
    res.send(orders);
    // res.status(202).json(orders)
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
});

module.exports = router;
