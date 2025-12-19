
import { db } from './firebaseInit.js';
import { doc, getDoc } from "firebase/firestore";


document.addEventListener("DOMContentLoaded", async () => {
  const usuarioLogueado = localStorage.getItem("usuario"); 
  const linkFormulario = localStorage.getItem("formulario");

    if (!usuarioLogueado) {
        window.location.href = "login.html";
        return;
    }




    // Traer links de configuración desde Firestore
    const configRef = doc(db, "config", "links");
    const configSnap = await getDoc(configRef);




 if (linkFormulario) {
    document.getElementById("btnConfirmar").addEventListener("click", () => {
      window.open(linkFormulario, "_blank");
    });
  }


    if(configSnap.exists()){
        const links = configSnap.data();

        document.getElementById("btnSpotify").addEventListener("click", () => {
            window.open(links.spotify, "_blank");
        });

        document.getElementById("btnFotos").addEventListener("click", () => {
            window.open(links.fotos, "_blank");
        });

        document.getElementById("btnUbicacion").addEventListener("click", () => {
            window.open(links.ubicacion, "_blank");
        });

    }

})  ;



