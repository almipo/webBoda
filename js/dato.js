import { db } from "./firebaseInit.js";
import {
  collection,
  getDocs,
} from "firebase/firestore";

document.addEventListener("DOMContentLoaded", () => {
  const btnMostrar = document.getElementById("idBtnDatos");
  const modal = document.getElementById("modalBanco");
  const cerrar = document.getElementById("cerrarModal");

  // Campos de modal
  const textoBanco1 = document.getElementById("textoBanco1");
  const textoCBU1 = document.getElementById("textoCBU1");
  const textoAlias1 = document.getElementById("textoAlias1");
  const textoDNI1 = document.getElementById("textoDNI1");
  const btnCopiarCBU1 = document.getElementById("btnCopiarCBU1");
  const btnCopiarAlias1 = document.getElementById("btnCopiarAlias1");

  const textoBanco2 = document.getElementById("textoBanco2");
  const textoCBU2 = document.getElementById("textoCBU2");
  const textoAlias2 = document.getElementById("textoAlias2");
  const textoDNI2 = document.getElementById("textoDNI2"); 
  const btnCopiarCBU2 = document.getElementById("btnCopiarCBU2");
  const btnCopiarAlias2 = document.getElementById("btnCopiarAlias2");

  let datosBancariosDB = [];

  async function cargarDatosBancarios() {
    try {
      const querySnapshot = await getDocs(collection(db, "datosBancarios"));
      datosBancariosDB = querySnapshot.docs.map((doc) => doc.data());
    } catch (error) {
      console.error("Error al traer datos bancarios:", error);
    }
  }
  function mostrarToast(mensaje) {
    const toast = document.createElement("div");
    toast.innerText = mensaje;
    toast.className = "toast";
    document.body.appendChild(toast);

    // Quitar el toast después de 2 segundos
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }
  btnMostrar.addEventListener("click", async () => {
    if (datosBancariosDB.length === 0) {
      await cargarDatosBancarios();
    }

    if (datosBancariosDB.length >= 2) {
      textoBanco1.innerText = `Banco: ${datosBancariosDB[0].nombreBanco}`;
      textoCBU1.innerText = `CBU: ${datosBancariosDB[0].cbu}`;
      textoAlias1.innerText = `Alias: ${datosBancariosDB[0].alias}`;
      textoDNI1.innerText = `DNI: ${datosBancariosDB[0].dni}`;

      textoBanco2.innerText = `Banco: ${datosBancariosDB[1].nombreBanco}`;
      textoCBU2.innerText = `CBU: ${datosBancariosDB[1].cbu}`;
      textoAlias2.innerText = `Alias: ${datosBancariosDB[1].alias}`;
      textoDNI2.innerText = `DNI: ${datosBancariosDB[1].dni}`;
    }

    modal.style.display = "flex";
  });

  cerrar.addEventListener("click", () => (modal.style.display = "none"));

  // Copiar CBU y Alias
  btnCopiarCBU1.addEventListener("click", async () => {
    await navigator.clipboard.writeText(datosBancariosDB[0].cbu);
    mostrarToast("CBU Cuenta 1 copiado!");
  });
  btnCopiarAlias1.addEventListener("click", async () => {
    await navigator.clipboard.writeText(datosBancariosDB[0].alias);
    mostrarToast("Alias Cuenta 1 copiado!");
  });
  btnCopiarCBU2.addEventListener("click", async () => {
    await navigator.clipboard.writeText(datosBancariosDB[1].cbu);
    mostrarToast("CBU Cuenta 2 copiado!");
  });
  btnCopiarAlias2.addEventListener("click", async () => {
    await navigator.clipboard.writeText(datosBancariosDB[1].alias);
    mostrarToast("Alias Cuenta 2 copiado!");
  });

document.addEventListener("DOMContentLoaded", () => {
    const btnMostrar = document.getElementById("idBtnDatos");
    const modal = document.getElementById("modalBanco");
    const cerrar = document.getElementById("cerrarModal");


    // Cerrar modal al tocar la x
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al tocar fuera
    window.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });
});

});

