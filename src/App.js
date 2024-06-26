import "./App.css";
import { VRoutes } from "./AppRoutes";
import { UserProvider } from "./Context/GobalStorage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCuxN4w0ax54If59kabDcT8cujb6KPekJg",
  authDomain: "ecommerce-d0efb.firebaseapp.com",
  projectId: "ecommerce-d0efb",
  storageBucket: "ecommerce-d0efb.appspot.com",
  messagingSenderId: "888001488379",
  appId: "1:888001488379:web:96a7608e66b62241b9d75e",
  measurementId: "G-5SH6TBJ724",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

window.messaging = messaging;

function App() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey:
          "BNiPHZW3AtgB1JuLvbRLAs-lPLdSjUV_K5gOrQ1LRso_YCoZhruk1SA1Fxm6R7jfYyhTqXFQwkyzqAiB6NaWQ_I",
        // vapidKey:
        //   "eumb7NE-omPiAAVRqqJWsE:APA91bEnSOYmGMFxQiFujZmTXsrtfUro7AsiPib_vCBZGLjcQEAjxXmStFltLT5vL5cmUI9VGc8CV6T9wXuf7Y8A0FpKtdDk8M4ZAoktkMh__IwvG5iUA_RGNujexWSTNh3XQk0JqBW2",
      }).then((token) => {
        localStorage.setItem("firebaseToken", token);
        console.log(token, "FOUND");
      });
    }
  });

  return (
    <div className="App">
      <UserProvider>
        <VRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
