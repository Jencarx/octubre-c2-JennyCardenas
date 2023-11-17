// VARIABLES: Cajas que guardan datos  --> let: se pueden cambiar los datos - const: es una constante EN MAYUS (aconsejable)
// Al declarar las variables es mejor en CamellCase: nombreDeUsuario

let edad = 22;
let nombre = "Pepito";
const apellido = "Perez";
edad = edad + 1;
console.log(edad, nombre, apellido);

// TIPOS DE DATOS:
// string: "cadenas de texto"
// number: numeros (-negativos, positivos o .decimales)
// boolean: true and false

let mascota = "Luna";
let precio = 500;
let elUsuarioEstaLogueado = true;

console.log(typeof mascota);
console.log(typeof precio);
console.log(typeof elUsuarioEstaLogueado);

// undefined: indefinido
// null: nulo
// NaN: not a number

let nombreUsuario = null;
let edad2 = undefined;

let a = 15;
let b = "Hola";
let c = a * b;
console.log(c);

// OPERADORES:
// matematicos: (+ - * / %(residuo de la division))
// de comparacion: devuelve un boolean (> < <= >= == != ===(comparacion estricta IDEAL USAR SIEMPRE) !==)

let num1 = 15;
let num2 = 20;
console.log(num1 <= num2);

// TEMPLATE LITERALS: BACKTICKS ` `
