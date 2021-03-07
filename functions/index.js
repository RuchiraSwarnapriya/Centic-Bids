import functions from "firebase-functions";
import admin from "firebase-admin";
// initializes your application

admin.initializeApp(functions.config().firebase);

// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendPushNotification = functions.firestore
  .document("some_collection/{some_document}")
  .onCreate(event => {
    // gets standard JavaScript object from the new write
    const writeData = event.data.data();
    // access data necessary for push notification 
    const sender = writeData.uid;
    const senderName = writeData.name;
    const recipient = writeData.recipient;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
      title: "Higher Bid Placed",
      body: "Someone placed a higher bid that you have bidded",
    //   sound:
    //   badge:
     }
    }
    // either store the recepient tokens in the document write
    const tokens = writeData.tokens;  
    
    // or collect them by accessing your database
    var pushToken = "";
    return functions
      .firestore
      .collection("user_data_collection/recipient")
      .get()
      .then(doc => {
         pushToken = doc.data().token;
         // sendToDevice can also accept an array of push tokens
         return admin.messaging().sendToDevice(pushToken, payload);
      });
});
