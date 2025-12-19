import { db } from "./firebaseInit.js";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

document.addEventListener("DOMContentLoaded", async () => {
  const usuarioLogueado = localStorage.getItem("usuario");

  if (!usuarioLogueado) {
    window.location.href = "login.html";
    return;
  }

  try {
    // Buscar el usuario en Firestore por apellido
    const usuariosRef = collection(db, "usuarios");
    const q = query(usuariosRef, where("apellido", "==", usuarioLogueado));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      const cantidadInvitados = docData.invitaciones;

      // Actualizar el span en el HTML
      const spanEntradas = document.getElementById("idCantidadEntradas");
      const pLugar = document.getElementById("lugar");
      if (spanEntradas) {
        spanEntradas.innerText = cantidadInvitados;
        if (cantidadInvitados === 1) {
          pLugar.innerText = "lugar para vos";
        } else {
          pLugar.innerText = "lugares para vos";
        }
      }
    
      
    const seccionRegalo = document.getElementById("idSectionRegalos");
    const imgSection = document.getElementById("idImgRegalos");
    const imgSection6 = document.getElementById("img6");
    const regalos = document.getElementById("idRegalos");

    if (!docData.regalo) {
      
      regalos.style.position = "absolute";
      seccionRegalo.style.display = "none";
      imgSection.classList.add("ajustada");
       imgSection6.classList.add("ajustada");
      
    } else {
             regalos.style={position:"relative", display:"flex", alignItems:"center", justifyContent:"center"};
      seccionRegalo.style={display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"};
                  imgSection.classList.remove("ajustada");
         imgSection6.classList.remove("ajustada");

      
    }
    }
} catch (error) {
    console.error("Ocurrió un error al mostrar/ocultar la sección de regalos:", error);
    // Opcional: mostrar mensaje al usuario
    alert("Hubo un error al cargar la sección de regalos. Intenta recargar la página.");
}
});