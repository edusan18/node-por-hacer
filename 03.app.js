const argv = require('./config/01.yargs').argv;
const porHacer = require('./por-hacer/01.por-hacer');

let comando = argv._[0];



switch(comando){

    case 'crear':
        
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
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

    node 03.app crear -d "Pasear al perro"
    * Resultado: { descripcion: 'Pasear al perro', completado: false }
    // Si entramos al archivo "db/data.json" encontramos solo un única línea "[{"descripcion":"Pasear al perro","completado":false}]"
    // , esto es debido a que cada vez que llamamos al metodo líneas arriba, estamos reescribiendo el archivo



*/