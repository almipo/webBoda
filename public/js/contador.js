const fechaObjetivo = new Date("mar 15, 2026 11:30:00").getTime();

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaObjetivo - ahora;

  if (distancia < 0) {
    clearInterval(intervalo);
    document.getElementById("contador").innerHTML = "¡Evento iniciado!";
    return;
  }

  document.getElementById("dias").textContent = Math.floor(distancia / (1000 * 60 * 60 * 24))+"  :";
      document.getElementById("horas").textContent = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+"  :" ;
  document.getElementById("minutos").textContent = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))+"  :";
   document.getElementById("segundos").textContent = Math.floor((distancia % (1000 * 60)) / 1000);
}, 1000);
