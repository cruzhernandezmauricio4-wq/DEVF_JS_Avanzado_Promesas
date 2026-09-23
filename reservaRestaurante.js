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
// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Usamos Math.random() para simular éxito o fallo en el envío
      const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500); // Simula el envío de un correo (1.5 segundos)
  });
}