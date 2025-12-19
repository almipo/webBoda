import { db } from "./firebaseInit.js";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", async () => {
  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  const apellidoIngresado = normalizarTexto(
    document.getElementById("apellido").value
  );

  let formulario = null; // usar "let" en vez de const
  try {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    let encontrado = false;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (
        data.apellido &&
        normalizarTexto(data.apellido) === apellidoIngresado
      ) {
        encontrado = true;
        formulario = data.link || null; 
      }
    });

    if (encontrado) {
      console.log("Login correcto");

      // Guardar en localStorage para recordar sesión
      localStorage.setItem("logueado", "true");
      localStorage.setItem("usuario", apellidoIngresado);
      if (formulario) {
        localStorage.setItem("formulario", formulario);
      }

      // Redirigir a index
      window.location.href = "index.html";
    } else {
      alert("Apellido incorrecto");
    }
  } catch (error) {
    console.error("Error al buscar usuario:", error);
  }
});
