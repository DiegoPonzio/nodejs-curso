//en este archivo aprenderemos como utilizar el modulo de sistema operativo

//require nos sirve para requerir los modulos o recursos que prove nodeJs
const os = require('os') //este es el modulo del sistema operativo


let cpu = os.cpus() //prove el cpu del equipo
let sistema = os.platform() //prove la plataforma del sistema
let user = os.hostname() //nos da el usuario del equipo



console.log(cpu);
console.log(sistema);
console.log(user);