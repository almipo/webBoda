function agendarEvento() {
  const titulo = encodeURIComponent("CASAMIENTO ROCIO Y ALAN");
  const descripcion = encodeURIComponent("TE ESPERAMOS A LAS 11:30, PARA COMPARTIR ESTE DIA CON NOSOTROS");
  const ubicacion = encodeURIComponent("ESTRIBO EVENTOS, MANZANARES, PILAR, BUENOS AIRES, ARGENTINA");

  const fechaInicio = "20251115T143000Z"; 
  const fechaFin = "20251115T233000Z";   

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${fechaInicio}/${fechaFin}&details=${descripcion}&location=${ubicacion}`;

  window.open(url, "_blank");
}
