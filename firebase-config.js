// Importando os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configurações do Firebase (substitua com as suas credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyCXkOedIsoQAsdxxqM8F3P1YhqtMpaVCyU",
  authDomain: "site-orcamento-d9d86.firebaseapp.com",
  databaseURL: "https://site-orcamento-d9d86-default-rtdb.firebaseio.com",
  projectId: "site-orcamento-d9d86",
  storageBucket: "site-orcamento-d9d86.firebasestorage.app",
  messagingSenderId: "74130841186",
  appId: "1:74130841186:web:c052eb21a05bd35712bb3b"
};

// Inicializar app e banco Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
