const fs = require('fs');

// Uso de fs de manera síncrona
console.log('Leyendo archivo de manera síncrona...');
try {
  const contenidoSync = fs.readFileSync('hola.txt', 'utf8');
  console.log('Contenido del archivo:', contenidoSync);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}

// Uso de fs de manera asíncrona
console.log('Leyendo archivo de manera asíncrona...');
fs.readFile('hola.txt', 'utf8', (error, contenidoAsync) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
  } else {
    console.log('Contenido del archivo:', contenidoAsync);
  }
});
