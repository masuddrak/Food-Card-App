
// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMO9CZZOYhwGtiqZK3tjliKks-_6cTfCc",
  authDomain: "food-card-app.firebaseapp.com",
  projectId: "food-card-app",
  storageBucket: "food-card-app.appspot.com",
  messagingSenderId: "837628240084",
  appId: "1:837628240084:web:46be6c7deea8d3d7a69b41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;