import { config } from 'firebase-functions';
import { initializeApp } from 'firebase-admin';
initializeApp(config().firebase);


exports.sendNotificationToFCMToken = functions.firestore.document('messages/{mUid}').onWrite(async (event) => {
    
    const latestBid = event.after.get('leatestBid');
    const title = event.after.get('title');
    const content = event.after.get('content');
    const fcmToken = event.before.get('leatestUserToken');

    var message = {
        notification: {
            title: title,
            body: content,
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