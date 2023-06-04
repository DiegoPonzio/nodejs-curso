/*

*/

const EventEmitter = require('events');

// Crear una instancia de EventEmitter
const myEmitter = new EventEmitter();

// Definir un evento personalizado
myEmitter.on('saludo', (nombre) => {
  console.log(`Hola, ${nombre}!`);
});

myEmitter.on('despedida', (nombre) => {
    console.log(`Adios, ${nombre}!`);
    });

// Emitir el evento 'saludo'
myEmitter.emit('saludo', 'Juan');
myEmitter.emit('despedida', 'Juan');
