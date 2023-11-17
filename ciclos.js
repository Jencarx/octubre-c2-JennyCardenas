// ciclos - loop - bucle

// for - while - do while

const probandoFor = () => {
  for (let i = 1; i <= 5; i++) {
    console.log("Hola");
    console.log(i);
  }

  console.log("termine");
};
probandoFor();

// obtener la sumatoria de los numeros desde el 1 hasta el 10
// 1+ 2+ 3+ 4 = ... ?

const sumatoria = () => {
  let acumulador = 0;

  for (let i = 1; i <= 10; i++) {
    acumulador += i;
  }

  return acumulador;
};

let x = sumatoria();
console.log(x);

const sumatoria1 = () => {
  let acumulador1 = 0;

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      acumulador1 += i;
    }
  }

  return acumulador1;
};

let x1 = sumatoria1();
console.log(x1);

const probandoWhile = () => {
  let i = 15;

  while (i <= 10) {
    console.log(i);

    i++;
  }
};

const probandoDoWhile = () => {
  do {
    console.log(i);

    i++;
  } while (i <= 10);
};
