// const fs = require('fs')
// fs.readFiles('./tareas.json', 'utf8', (err, data))
// let tarea = JSON.parse(data)

const tarea = require ('./tareas.json') // consume el archivo json 
// se usa requiere para acortar el codigo
// console.log(tarea)
let funcionDeTareas = () => {
    const opciones = process.argv[2]
    switch (opciones) {
        case 'listar':
            console.log(tarea)
            break;
        case undefined:
            console.log('Atencion, tienes que pasar una opción')
            break;

        default:
            console.log('No entiendo que quieres decir')
            break;
    }
}
funcionDeTareas()
