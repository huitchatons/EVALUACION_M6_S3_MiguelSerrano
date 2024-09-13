// celular.js
const moment = require('moment');

const celular = {
  marca: 'Samsung',
  modelo: 'Galaxy S21',
  color: 'Negro',
  almacenamiento: '128GB',
  sistemaOperativo: 'Android',
  fechaCompra: moment().format('YYYY-MM-DD')
};

// Copia del objeto con modificaciones
const celularActualizado = {
    ...celular,
    color: 'Blanco',
    almacenamiento: '256GB',
    peso: '169g',
    bateria: '4000mAh'
  };
  
  module.exports = { celular, celularActualizado };
