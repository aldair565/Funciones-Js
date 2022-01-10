//Comentario de una linea

/*acaracas venezuela comentario multilinea

asfknlansfkln
asflaksnflakfs
*/

/*
alert("Im alive foo!");

console.log("Este es un mensaje para la consola");

var nombre ="Aldair";
var apellido = "Meraz";
var edad = 25;

console.log(nombre,apellido,edad);

alert("Mi nombre es" + nombre);
console.log("Mi apellido es " + apellido);

alert("Mi nombre es: " + nombre + " , mi apellido es: " + apellido + " y mi edad es: " + edad);

//Otro ejemplo de como mostrar variables en consola

var num1 = 5;
var num2 = 7;
var resultado = num1 + num2;

console.log("La suma de los numeros es " + resultado);
*/

/*
//Declaracion de funcion
function saludar(){
    alert("Hola a todos");
}

saludar();

//Expresion de funcion
var cantar = function(){
    alert("Me gusta cantar las de los temerarios");
}

cantar();

//funcion sin parametros
function sumar(){
    var num1 = 5;
    var num2 = 6;
    var suma = num1 + num2;
    alert("La suma de la funcion sin parametro es: " + suma);
}

sumar();

//funcion con parametros
function restar(num1, num2, resta){
    var numero1 = 6;
    var numero2 = 5;
    var resta = num1 - num2;
    alert("La resta de la funcion con parametros es: " + resta);
}

restar();
*/

//funcion prompt
function prompter(){
    var respuesta = prompt("Buenos dias, pase su nombre");
    alert("Es un gusto " + respuesta);
}

prompter();

function areaCuadrado(){
    var datoIngresado= prompt("Ingresa un numero");
    var resultado = datoIngresado * datoIngresado;
    alert("El area del cuadrado es " + resultado + " porque el numero que ingresaste es " + datoIngresado);
}

areaCuadrado();