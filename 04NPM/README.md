# Inicialización de un proyecto en NPM usando Visual Studio Code

Este README proporciona instrucciones para iniciar un proyecto en NPM utilizando el entorno de desarrollo Visual Studio Code.

## Paso 1: Instalación de Visual Studio Code

Si aún no tienes instalado Visual Studio Code, puedes descargarlo e instalarlo desde el sitio web oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Paso 2: Creación de un nuevo directorio de proyecto

1. Abre Visual Studio Code.
2. Crea un nuevo directorio vacío en tu sistema de archivos donde deseas que se ubique el proyecto.

## Paso 3: Inicialización del proyecto en NPM

1. Abre el directorio del proyecto en Visual Studio Code seleccionando "File" (Archivo) > "Open Folder" (Abrir Carpeta) y elige el directorio que creaste en el paso anterior.
2. Abre la terminal integrada en Visual Studio Code seleccionando "View" (Vista) > "Terminal" o utilizando el atajo de teclado `Ctrl + ñ`.
3. En la terminal, ejecuta el siguiente comando para inicializar el proyecto en NPM:

4. Sigue las instrucciones en la terminal para configurar tu proyecto. Puedes presionar "Enter" para aceptar los valores predeterminados o ingresar tus propias configuraciones, como el nombre del proyecto, la versión, la descripción, el punto de entrada, etc.

## Paso 4: Instalación de dependencias

1. Una vez que hayas inicializado tu proyecto en NPM, puedes instalar las dependencias necesarias para tu proyecto. Puedes hacerlo ejecutando el siguiente comando en la terminal:


Reemplaza "nombre-de-la-dependencia" por el nombre de la dependencia que deseas instalar. Por ejemplo, si deseas instalar la dependencia "lodash", ejecuta el siguiente comando:

```bash
npm install lodash 
ó
npm i --save lodash
```

2. Las dependencias se instalarán en una carpeta llamada "node_modules" en el directorio de tu proyecto. Puedes ver las dependencias instaladas en el archivo "package.json" generado en el paso de inicialización.

## Paso 5: Uso de NPM en tu proyecto

Ahora que has inicializado tu proyecto en NPM y has instalado las dependencias necesarias, puedes comenzar a utilizar NPM en tu proyecto. Puedes usar comandos como `npm start`, `npm test`, etc., según las configuraciones y scripts definidos en el archivo "package.json".

## Conclusión

Siguiendo estos pasos, has inicializado correctamente un proyecto en NPM utilizando Visual Studio Code. Ahora estás listo para desarrollar y utilizar las herramientas y dependencias de NPM en tu proyecto.

Recuerda que este es solo un ejemplo de cómo podría ser un README para iniciar un proyecto en NPM usando Visual Studio Code. Puedes personalizarlo y agregar más información relevante según las necesidades de tu proyecto.

## TIP
si gustas obtener los paquetes que previamente instalaste ocupa el comando 
```bash
npm install
ó
npm i
```