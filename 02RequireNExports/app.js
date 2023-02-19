//aqui aprenderemos a importar nuestros modulos que creemos dentro de otros archivos para su eventual uso
//como vimos anterior mente para importar usamos require, de ese modo tambien importaremos nuestros archivos

const myModules = require('./myModules') // se indica en el require la direccion relativa a la que queremos accesar

let edad = myModules.edad
myModules.saludo("Diego")

//una de las formas mas convenintes al importar datos de un archivo es con el uso de la destructuracion 
//esta nos permite acceder a valores espefificos de un arreglo o de un objeto

const {newEdad, suma, sal, lista} = myModules 

/* en este caso destructuraremos myMudles 
el cual cuenta con un arreglo donde por medio de su clave obtendremos lo que necesitemos */

let [dat1, dat2, ...lastdat] = lista
/* en este caso con listas o arreglos podremos acceder a ciertos digitos los cuales necesitamos
 o crear una lista nueva con los datos que nos falten */

console.log(newEdad);
console.log(suma(5,7));
sal()
console.log(dat1, dat2, lastdat);
console.log(edad);