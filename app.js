/* // required
const fs = require('fs'); // librería de node
// const fs = require('express');    // no es propia de node, pueden ser expansiones.
// const fs = require('./fs');   // de archivos crerados en el proyecto, con un path. */


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
//console.log(argv);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(process) // process es una variable de entorno
//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv2);
/* let parametro = argv[2];
let base = parametro.split("=")[1]; */