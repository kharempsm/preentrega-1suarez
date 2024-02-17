import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC9lBuHiQPS5pljDvSPZPXnTw9-tovvVU",
  authDomain: "kpstore-proyectofinal.firebaseapp.com",
  projectId: "kpstore-proyectofinal",
  storageBucket: "kpstore-proyectofinal.appspot.com",
  messagingSenderId: "625488786754",
  appId: "1:625488786754:web:8d6fdb33bc0a335dd8c4db",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
