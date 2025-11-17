import { db } from "./firebase-config.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("cadastrar").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const usuarioRef = doc(db, "usuarios", email); // usa o email como ID
    await setDoc(usuarioRef, {
      nome,
      email,
      senha, // pode ser criptografada depois
      alvenaria_dobrada: 0.0,
      alvenaria_singela: 0.0,
      sapatas: 0.0,
      pilares: 0.0,
    });
    alert("Usuário cadastrado com sucesso.");
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar usuário.");
  }
});
