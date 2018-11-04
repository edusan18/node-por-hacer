const argv = require('./config/01.yargs').argv;

let comando = argv._[0];



switch(comando){

    case 'crear':
        
        console.log('Crear por hacer');
        break;
    
    case 'listar':
    console.log('Mostrar todas las tareas por hacer');
    break;
    
    case 'actualizar':
    console.log('Actualiza una tarea por hacer');
    break;
    
    default:
    console.log('Comando no es reconocido');
    //break;
    
    
    }

/*
//Ejecutar en consola:

node 02.app crear
* Resultado: sale un error porque le falta una descripcion cuyo campo es obligatorio

node 02.app crear "Pasear al perro"
* Resultado: Crear un elemento por -- Resultado correcto

node 02.app actualizar
*Resultado: Actualiza el estado completado
* sale un error porque le falta una descripcion cuyo campo es obligatorio

node 02.app actualizar -d "Pasear al perro"
* Resultado: Actualiza una tarea por hacer -- Resultado correcto

*/