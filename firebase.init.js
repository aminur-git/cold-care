// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzX4lvQqwzx9ME8ckeaRtrh6noRW7sj8",
  authDomain: "cold-care-36804.firebaseapp.com",
  projectId: "cold-care-36804",
  storageBucket: "cold-care-36804.firebasestorage.app",
  messagingSenderId: "1050195758446",
  appId: "1:1050195758446:web:27d007f8be95445aa6057f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app