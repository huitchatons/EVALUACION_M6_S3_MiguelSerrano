// index.js
const { celular, celularActualizado } = require('./celular');

// Función para mostrar la descripción del celular
const mostrarDescripcion = () => {
  console.log(`Mi celular es un ${celular.marca} ${celular.modelo} de color ${celular.color}, con ${celular.almacenamiento} de almacenamiento, sistema operativo ${celular.sistemaOperativo} y lo compré el ${celular.fechaCompra}.`);
};

mostrarDescripcion();

// Ejemplo de función con callback utilizando función de flecha
const procesarCelular = (objetoCelular, callback) => {
  console.log('Procesando información del celular...');
  callback(objetoCelular);
};

// Callback que muestra la información del celular actualizado
const mostrarCelularActualizado = (celular) => {
  console.log(`Celular actualizado: ${celular.marca} ${celular.modelo}, Color: ${celular.color}, Almacenamiento: ${celular.almacenamiento}, Peso: ${celular.peso}, Batería: ${celular.bateria}.`);
};

procesarCelular(celularActualizado, mostrarCelularActualizado);
