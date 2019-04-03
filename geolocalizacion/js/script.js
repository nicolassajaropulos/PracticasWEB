function muestraPosicion(posicion) {
  let latlon = posicion.coords.latitude + "," + posicion.coords.longitude;
  console.log(latlon);
  let imagenMapa =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    latlon +
    "&zoom=14&size=400x300&key=AIzaSyBanDfrp-cNSet4uPz9ujzBaKkzUV9VPy0";

  document.getElementById("mapa").innerHTML = '<img src="' + imagenMapa + '">';
}

function muestraError(error) {
  let mensaje = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      mensaje = "No autorizó el ususario";
      break;
    case error.POSITION_UNAVAILABLE:
      mensaje = "Información no disponible";
      break;
    case error.TIMEOUT:
      mensaje = "La solicitud ha tardado y expiró";
      break;
    case error.UNKNOWN_ERROR:
      mensaje = "Error desconocido";
      break;
    default:
      break;
  }
}

function localizacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError);
  }
}
