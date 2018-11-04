/****************************************************
// Con optimizaciones
 ***************************************************/


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const  completado = {
    alias: 'c',
    default: true,
    desc:'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',{descripcion})
                .command('borrar','Borra un elemento por hacer',{descripcion,completado})
                 .command('actualizar','Actualiza el estado completado',{descripcion})
                .help()
                .argv;


                
module.exports = {
argv

}

/*
const argv  ....

comando crear 'Crear un elemento por hacer'
-- descripcion -d

comando actualizar 'Actualiza el estado completa'
--descripcion -d
--completado -c true

--help
*/