function agendarEvento() {
  const titulo = encodeURIComponent("lorem ipsum dolor sit amet");
  const descripcion = encodeURIComponent("loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  const ubicacion = encodeURIComponent("loren ipsum 1234, ciudad, pais");

  const fechaInicio = "20260315T143000Z"; 
  const fechaFin = "20260315T233000Z";   

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${fechaInicio}/${fechaFin}&details=${descripcion}&location=${ubicacion}`;

  window.open(url, "_blank");
}
