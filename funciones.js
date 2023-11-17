// FUNCIONES DECLARADAS si tiene hoisting

let nombre = "pepito";
console.log(nombre);

function f1() {
  let edad = 30;
  console.log(edad);
}
f1();

function f2() {
  return 10 + 15;
}
let resultado = f2();
console.log(resultado);

// PARAMETROS

function f3(nombreUsuario) {
  return `Hola ${nombreUsuario}, como estas?`;
}
let resultado2 = f3();
console.log(resultado2);

// FUNCIONES EXPRESADAS O ANONIMAS
// comun

let restar = function (n1, n2){
    return n1 - n2
}

let resultadoResta = restar(10,5 )
console.log(resultadoResta)

// arrow function

let multiplicar = numero => numero * 10

let resMulti = multiplicar (4)
console.log(resMulti)

// HOISTING ( no necesita orden en el console.log())

//SCOPE: alcance que tienen las variables (lugar donde se crean las variables)
// let y const con scope local

let sonido = "guau"
let decirSonido = ()=>{
    console.log(sonido)
}
decirSonido()
