importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyD0vW2tYEHsgmJAzm11E_z6dOV2eHeQOT8",
  authDomain: "fitnessapp-d99a2.firebaseapp.com",
  projectId: "fitnessapp-d99a2",
  storageBucket: "fitnessapp-d99a2.appspot.com",
  messagingSenderId: "430957386348",
  appId: "1:430957386348:web:35b4b936e67be9b49bd649",
  vapidKey: "BHmt8OnWzfBRggFam36BrSOVrJL-yWrhOzv0d-tFcgiY8xkF2xZsqo0dPe0lQUhHRb_f0btWLTXpFK7kX4hXMmw"
});
const messaging = firebase.messaging();
