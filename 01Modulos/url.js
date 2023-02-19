//El modulo url nos permite dividir una dirección web o URL en partes mas legibles
const url = require('url');


const uri = 'https://pokeapi.co/api/v2/pokemon?limit=10';

let q = url.parse(uri, true); //parse es un metodo que nos devueleve cada parte de una URL en un objeto 

console.log(q.host);//nos devuelve el host
console.log(q.pathname);//nos devuelve la direccion a la que nos dirigimos
console.log(q.search);//nos devuelve la busqueda que estamos haciendo
console.log(JSON.stringify(q.query)); //nos da la query de la url