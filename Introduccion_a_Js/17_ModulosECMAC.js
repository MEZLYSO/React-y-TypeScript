// Modulos ECMACscript
// importacion del modulo
// con "as" puedes añadirle un alias a la importacion

// import {sumar as Sum,restar} from './17_Funciones.js'

// --> Export Default
// Solo una por archivo
// Y lo puedo llamar como quiera

import multi,{sumar as Sum,restar} from './17_Funciones.js'

console.log(Sum(2,3));
console.log(restar(4,1));
console.log(multi(2,3));

