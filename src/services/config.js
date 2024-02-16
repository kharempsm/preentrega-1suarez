import { initializeApp } from "firebase/app"; //iniciar conexion con firebase
import { getFirestore } from "firebase/firestore"; // obtener una instancia del servicio del store

const firebaseConfig = {
  apiKey: "AIzaSyAC9lBuHiQPS5pljDvSPZPXnTw9-tovvVU",
  authDomain: "kpstore-proyectofinal.firebaseapp.com",
  projectId: "kpstore-proyectofinal",
  storageBucket: "kpstore-proyectofinal.appspot.com",
  messagingSenderId: "625488786754",
  appId: "1:625488786754:web:8d6fdb33bc0a335dd8c4db",
};

//inicializamos firebase y se pasa la configuracion como argumento esto me devuelve una instancia de firebase.

const app = initializeApp(firebaseConfig);

// Ahora usamos esa instancia para obtener el servicio del store

export const db = getFirestore(app);
