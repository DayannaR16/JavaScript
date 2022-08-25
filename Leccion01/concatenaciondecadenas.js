var nombre = 'Alexa';
apellido = 'Rincon';

/*definimos 3er variable y para unir dos valores 
escribimos el nombre de la variable con el operador 
de + si fueran numeros se le conoceria 
como una suma pero como son cadenas 
se conoce como concatenacion*/

var nombreCompleto = nombre + ' ' + apellido; 
console.log(nombreCompleto);

var nombreCompleto2= 'Diego' + ' ' + 'Ramirez';
console.log(nombreCompleto2);

var x = nombre + 6 + 4;
console.log(x);


// si se coloca con parentesis lo toma como una operacion
x = nombre + (2 + 4) ;
console.log(x);

//lo toma como un numero porque los numeros estan al lado izquierdo
x= 2 + 4 + nombre
console.log (x);


