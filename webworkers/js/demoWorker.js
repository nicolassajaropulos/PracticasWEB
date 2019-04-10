var i = 0;

function cuenta() {
  // Envía respuesta al worker que lo mandó a llamar
  postMessage(++i);
  // Ejecutamos cuenta cada 500 ms
  setTimeout("cuenta()", 500);
}

cuenta();
