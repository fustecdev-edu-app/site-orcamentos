// 🔥 Substitua pelas suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXkOedIsoQAsdxxqM8F3P1YhqtMpaVCyU",
  authDomain: "site-orcamento-d9d86.firebaseapp.com",
  databaseURL: "https://site-orcamento-d9d86-default-rtdb.firebaseio.com",
  projectId: "site-orcamento-d9d86",
  storageBucket: "site-orcamento-d9d86.firebasestorage.app",
  messagingSenderId: "74130841186",
  appId: "1:74130841186:web:c052eb21a05bd35712bb3b"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const btn = document.getElementById("cadastrar");
const tabela = document.querySelector(".tabelaPrecos");

btn.onclick = async () => {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) return alert("Preencha todos os campos!");

  try {
    await db.collection("usuarios").doc(email).set({
      nome,
      email,
      senha,
      alvenaria_dobrada: 0.0,
      alvenaria_singela: 0.0,
      sapatas: 0.0,
      pilares: 0.0
    });

    alert("Usuário cadastrado com sucesso!");
    tabela.style.display = "block"; // mostra tabela de preços
  } catch (e) {
    console.error("Erro ao cadastrar:", e);
    alert("Erro ao cadastrar usuário.");
  }
};
