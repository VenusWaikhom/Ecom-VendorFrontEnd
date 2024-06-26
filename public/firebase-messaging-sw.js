importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyCuxN4w0ax54If59kabDcT8cujb6KPekJg",
  authDomain: "ecommerce-d0efb.firebaseapp.com",
  projectId: "ecommerce-d0efb",
  storageBucket: "ecommerce-d0efb.appspot.com",
  messagingSenderId: "888001488379",
  appId: "1:888001488379:web:96a7608e66b62241b9d75e",
  measurementId: "G-5SH6TBJ724",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
