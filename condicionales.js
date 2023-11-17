// CONDICIONALES if / ternario / switch case

const determinarPermisos = (rolDelUsuario) => {
  if (rolDelUsuario === "vendedor") {
    return true;
  } else {
    return false;
  }
};

let tienePermiso = determinarPermisos("comprador");

console.log(tienePermiso);

let salgoConParaguas = (clima) => {
  return clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";
};

let loLlevo = salgoConParaguas("lluvioso");
console.log(loLlevo);

// switch case
// un usuario diga la marca del auto
// el sistema le devuelva el total a pagar

// base del impuesto: 100

// audi 100
// bmw 150
// vw 50
// fiat 75
// renault 80

const determinarImpuesto = (marcaDelAuto) => {
  let impuestoInicial = 100;

  switch (marcaDelAuto) {
    case "audi":
      impuestoInicial += 100;
      break;
    case "bmw":
      impuestoInicial += 150;
      break;
    case "vw":
      impuestoInicial += 50;
      break;
    case "fiat":
      impuestoInicial += 75;
      break;
    case "renault":
      impuestoInicial += 80;
      break;
    default:
      impuestoInicial = "Su auto esta excento de pago";
  }
  return impuestoInicial;
};

let res = determinarImpuesto("vw");
console.log(res);
