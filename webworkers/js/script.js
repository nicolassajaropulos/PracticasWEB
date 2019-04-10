var w1 = undefined;
var w2 = undefined;

function iniciarWorker() {
  // pregunta si lo soporta
  if (typeof w1 == "undefined") {
    w1 = new Worker("js/demoWorker.js");
    w1.onmessage = function(event) {
      document.getElementById("resultado").innerHTML = event.data;
    };
  } else {
    alert("No soporta WebWorkers");
  }
}

function detenerWorker() {
  w1.terminate();
  w1 = undefined;
}

function iniciarWorker2() {
  // pregunta si lo soporta
  if (typeof w2 == "undefined") {
    w2 = new Worker("js/demoWorker.js");
    w2.onmessage = function(event) {
      document.getElementById("resultado2").innerHTML = event.data;
    };
  } else {
    alert("No soporta WebWorkers");
  }
}

function detenerWorker2() {
  w2.terminate();
  w2 = undefined;
}
