const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51IqxlASEhzQNvF8WmloxNqWhy8aI2uMKa9fIHh4UssIRj4dU4TyXvgUQQRycEl7E865Gi1TO9TNknnvDHE4Mmjur00jWkYMPvm')


// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get('/',(req,res) => res.status(200).send('helloworld'));

app.post('/payments/create', async (req,res)=>{
    const total = req.query.total;
    console.log('Payment for the amount >> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Commands
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//http://localhost:5001/get-breathe/us-central1/api