/***************************************************
 * CON OPTIMIZACIONES
 ***************************************************/

const argv = require('./config/02.yargs').argv;
const porHacer = require('./por-hacer/03.por-hacer');
const colors = require('colors');
let comando = argv._[0];



switch(comando){

    case 'crear':
        
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado)
        {
            console.log('===== Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('==================='.green);

        }
    //console.log('Mostrar todas las tareas por hacer');
    break;
    
    case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    console.log(actualizado);
    break;
    
    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;

    default:
    console.log('Comando no es reconocido');
    //break;
    
    
    }


/*
//Ejecutar en consola:

    node 04.app crear -d "Pasear al perro"
    * Resultado: { descripcion: 'Pasear al perro', completado: false }
    // Si entramos al archivo "db/data.json" encontramos varios registros dependiendo cuantos crear existen


    // Listar el contenido guardado
    node 04.app listar
    * Resultado:
    ===== Por Hacer=====
    gian
    Estado:  false
    ===================


    // Actualizamos una tarea ya guardada
     node 04.app actualizar -d "Pasear al perro" -c true
    * Resultado:
    true


     node 04.app listar
    * Resultado:
    ===== Por Hacer=====
    gian
    Estado:  true
    ===================

    
    // Eliminamos un registro guardado
    node 04.app borrar -d "Pasear al perro"
    * Resultado: true


*/