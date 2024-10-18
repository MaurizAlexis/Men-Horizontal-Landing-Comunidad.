// Fecha futura para el contador
const targetDate = new Date('2024-12-31T00:00:00').getTime();

function updateCounter() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  document.getElementById('days').innerHTML = days;
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);
updateCounter();
