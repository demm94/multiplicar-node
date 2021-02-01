const fs = require('fs'); // librería de node
const colors = require('colors');

let crearArchivo = (base, limite) => { // modele.exports.crearArchivo
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un número`);
            return; // por que el código sigue corriendo
        } else if (!Number(limite)) {
            reject(`El límite '${limite}' no es un número`);
            return;
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} x ${i} = ${base * i}`);
            contenido += `${base} x ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(contenido));
        const fileName = `tablas/tabla-${base}.txt`;
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            else resolve(fileName);
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('--------------------------------------------'.green);
    console.log(`--Tabla del ${base} con límite ${limite} ---`.green);
    console.log('--------------------------------------------'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};