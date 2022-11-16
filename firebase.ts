import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMrw_uSjmWkQHYivzLhyIVh-3602fp2K8",
  authDomain: "vladislav-metik.firebaseapp.com",
  projectId: "vladislav-metik",
  storageBucket: "vladislav-metik.appspot.com",
  messagingSenderId: "1089234168143",
  appId: "1:1089234168143:web:19436ee032e5a906f2fd3a",
  measurementId: "G-R61QL3MWKF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);