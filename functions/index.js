const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


exports.sendNotificationToFCMToken = functions.firestore.document('items/{itemsId}').onWrite(async (event) => {
    
    const currentBid = event.after.get('currentBid');
    const title = event.after.get('title');
    const fcmToken = event.before.get('fcmToken');
    const msgTitle = "Higher Bid is Placed for " + title
    const body = "Someone placed higher bid for this item, New Bid is " +currentBid+"$" ; 

    var message = {
        notification: {
            title: msgTitle,
            body: body ,
        },
        token: fcmToken,
    }

    let response = await admin.messaging().send(message);
    console.log(response);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });