import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjnP0mURxbRQeo7rzj3UL4To_UzkSDHdE",
  authDomain: "todo-9ffce.firebaseapp.com",
  projectId: "todo-9ffce",
  storageBucket: "todo-9ffce.appspot.com",
  messagingSenderId: "267563520710",
  appId: "1:267563520710:web:f765d69ec7bec2c0903dc7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function add() {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      title: "Задача 3",
      status: "active",
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function get() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().status}`);
  });
}

add();
get();
