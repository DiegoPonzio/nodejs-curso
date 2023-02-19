const fs = require('fs'); //este es el modulo de sistema de archivos

//uso de File System

// appendFile nos sirve para la matipulacion de archivos en este caso agregar 
fs.appendFile('hola.txt', 'habia una vez un patito que decia miau miau, como el patito solo podia decir miau miau se puso triste y chillo :( y se lo comieron',
    err => {
        if (err) throw err
        console.log("Se creo ese archivo wiiii");
    }); /* este nos pide tres parametros, el nombre del archivo con su extención,
    el contenido del archivo y un callcack en caso de errores */

//readFile nos sirve para la lectura de archivos 
const data = fs.readFile('hola.txt', 'utf-8', (err, data) => {
    if (err) throw error
    console.log(data);
    return data
}); /* como primera parametro se nos pide el path del archivo,
    la codificacion la que leeriamos el archivo y un callback que nos devuelva la un error o la información optenida */


//writeFile nos permite reescribir o escribir en un nuevo archivo
fs.writeFile('nuevoArchivo.txt', `${data}\n\r copia`, err => {
    if (err) throw err;
    console.log('Guardado!');
}); /* como primer parametro nos pide el path del archivo,
la informacion que se va a escribir y finalmente un callback para el manejo de errores */

//unlink nos permite borrar un archivo
fs.unlink('nuevoArchivo.txt', err => {
    if (err) throw err;
    console.log('Archivo borrado!');
}); //como primer parametro se nos pide el path del archivo y un callback para el manejo de errores

//rename nos permite renombrar un archivo
fs.rename('nuevoArchivo.txt', 'halaPatitio.txt', err => {
    if (err) throw err;
    console.log('Archivo renombrado!');
});// como primer parametro nos pide el nombre del archivo a renombrar, como segundo el nuevo nombre del archivo y 

