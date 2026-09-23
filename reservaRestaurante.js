// Simulando una base de datos de mesas disponibles
const mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si las mesas solicitadas son menores o iguales a las disponibles, se confirma
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Mesas disponibles: se pueden reservar ${mesasSolicitadas}.`);
      } else {
        // Si no hay suficientes mesas, se rechaza la promesa
        reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles}.`);
      }
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}