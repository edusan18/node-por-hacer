const opts ={
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const opts2 ={
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado:{
        alias: 'c',
        default: true,
        desc:'Marca como completado o pendiente la tarea'
    }
}



const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',opts)
                .command('borrar','Borra un elemento por hacer',opts)
                 .command('actualizar','Actualiza el estado completado',opts2)
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