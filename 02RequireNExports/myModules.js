//aqui veremso diversas maneras en las que podremos exportar objetos, listas, variables, etc.

let edad = 17 //creamos una variable x y le damos un valor

module.exports.edad = edad // de este modo podemos exportar un solo elemento de nuestro archivo

//igual podremos exportar funciones
function saludo(name) {
    console.log("Hola " + name);
}

function suma(n1, n2) {
    return n1 + n2
}

module.exports.saludo = saludo

//Tambien podremos exportar multiples vareables en un mismo lugar por medio de un arreglo
module.exports = {
    newEdad: edad,
    suma: suma,
    sal: function () {
        const os = require("os");
        let plat = os.platform();
        console.log("tu plataforma es: " + plat);
    },
    lista: [10,50,48,23,324,5,23,85,0,52],
    saludo,
    edad
}