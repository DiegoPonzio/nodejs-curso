## Ejercicio
    En este ejemplo, utilizamos el módulo events incorporado en Node.js para crear una instancia de EventEmitter. Luego, definimos un evento personalizado llamado 'saludo' utilizando el método on(), que toma un nombre de evento y una función de devolución de llamada. Cuando se emite el evento utilizando el método emit(), la función de devolución de llamada asociada se ejecuta y muestra un mensaje de saludo en la consola.

    Puedes personalizar este ejemplo agregando más eventos y funciones de devolución de llamada, explorando otros métodos proporcionados por EventEmitter, como once() para escuchar un evento solo una vez, o incluso crear tus propias clases que extiendan EventEmitter para encapsular eventos y funcionalidades relacionadas.

    Recuerda que para ejecutar este código, debes tener Node.js instalado en tu sistema y ejecutarlo mediante el comando node nombre-del-archivo.js, reemplazando nombre-del-archivo con el nombre del archivo que contiene el código.