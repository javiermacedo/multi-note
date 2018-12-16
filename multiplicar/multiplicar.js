const mfs = require('fs');
const color = require('colors');

crearArchivo = (base, limite = 10) => {
    return new Promise((resolv, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let vari = '';
        for (let i = 1; i <= limite; i++) {
            vari += `${base} * ${ i } = ${base * i}\n`;
        }

        mfs.writeFile(`tablas/tabla-${base}.txt`, vari, function(err) {
            if (err)
                reject(err)
            else
                resolv(`tabla-${base}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado!!!}`);
        });

    });
}

listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`${base} no es un número`);
        return;
    }
    let vari = '';
    console.log(`Tabla del ${base}`.yellow);
    console.log('------------'.yellow);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}