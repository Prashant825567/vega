import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGfNEkqdAAeffe_itRhlC2qGiHHg3QBSY",
  authDomain: "project-d0959e9c-a68e-4968-88e.firebaseapp.com",
  projectId: "project-d0959e9c-a68e-4968-88e",
  storageBucket: "project-d0959e9c-a68e-4968-88e.firebasestorage.app",
  messagingSenderId: "37700546622",
  appId: "1:37700546622:web:3942d5e8134c3e0d56616f"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app, "ai-studio-vega-21470024-b27b-41ee-b87c-1e14e814bae8");

export { app, db };
