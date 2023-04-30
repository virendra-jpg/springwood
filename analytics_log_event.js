import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtdrw0Z_XPZJEl5iTbE2G0nV0Ge0XbeKw",
  authDomain: "springwood-422ed.firebaseapp.com",
  projectId: "springwood-422ed",
  storageBucket: "springwood-422ed.appspot.com",
  messagingSenderId: "737466387161",
  appId: "1:737466387161:web:115db22ff56a1edc180cc8",
  measurementId: "G-KTS0MQQPQY"
};

function logFilterValues({ location, pincode, personname, emailid, phoneno }) {
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  logEvent(analytics, "filter1", { name: "Location", value: location });

  logEvent(analytics, "filter2", { name: "PINCODE", value: pincode });

  // logEvent(analytics, "identity", { name: personname, email: emailid, phone: phoneno });
  // console.log("Identity event logged");
}

export { logFilterValues };
