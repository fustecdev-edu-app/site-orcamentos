import { db } from "./firebase-config.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const btn = document.getElementById("cadastrar");

btn.addEventListener("click", async () => {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) return alert("Preencha todos os campos!");

  try {
    // Usamos o email como ID do documento
    await setDoc(doc(db, "usuarios", email), {
      nome,
      email,
      senha,
      alvenaria_dobrada: 0.0,
      alvenaria_singela: 0.0,
      sapatas: 0.0,
      pilares: 0.0
    });
    alert("Usuário cadastrado com sucesso!");
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    alert("Erro ao cadastrar. Veja console.");
  }
});
