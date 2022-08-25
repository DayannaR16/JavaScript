/*
Ejemplos de 
tipos de datos
 en JavaScript
*/
//Tipo de dato String
var nombre = "Dayanna";
console.log(typeof nombre);

nombre = 10.5;
console.log (typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Alexa", 
    apellido: "Rincon",
    telefono: "3008897319"
}
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera =false;
console.log(typeof bandera);

//Tipo de dato Fuction
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log (typeof simbolo);

//Tipo Clase es una function
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;}
}
console.log(typeof persona);

//Tipo de dato undefined , tambien se puede usar como un valor
var x;
console.log(typeof x);

x= undefined;
console.log(typeof x);

//Tipo de dato NULL = ausencia de valor
var y = null;
console.log(typeof y);

//Tipo de  dato Array =Arreglos 
var autos=['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//cadenas vacias a nuestras variables
var z = '';
console.log(z);
console.log(typeof z);


