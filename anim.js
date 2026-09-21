// Música: intenta reproducir al abrir la página.
// Si el navegador bloquea el autoplay, se reproduce en el primer clic, toque o tecla.
var audio = document.querySelector("audio");

function iniciarMusica() {
  var intento = audio.play();
  if (intento !== undefined) {
    intento.catch(function () {
      var eventos = ["click", "touchstart", "keydown"];
      function reintentar() {
        audio.play().then(function () {
          eventos.forEach(function (e) {
            document.removeEventListener(e, reintentar);
          });
        }).catch(function () {});
      }
      eventos.forEach(function (e) {
        document.addEventListener(e, reintentar);
      });
    });
  }
}
iniciarMusica();

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
