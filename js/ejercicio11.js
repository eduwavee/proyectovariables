let num = parseInt(prompt("Escribe un número"));
let resultado = "El " + num + " es divisible por ";
let divisores = "";

if (num % 2 === 0) {
  divisores = divisores + "2";
}

if (num % 3 === 0) {
  if (divisores.length > 0) {
    divisores = divisores + ", 3";
  } else {
    divisores = divisores + "3";
  }
}

if (num % 5 === 0) {
  if (divisores.length > 0) {
    divisores = divisores + ", 5";
  } else {
    divisores = divisores + "5";
  }
}

if (num % 7 === 0) {
  if (divisores.length > 0) {
    divisores = divisores + ", 7";
  } else {
    divisores = divisores + "7";
  }
}

// Reemplazar la última coma por "y" si hay más de un divisor
let ultimaComa = divisores.lastIndexOf(",");
if (ultimaComa !== -1) {
  divisores = divisores.substring(0, ultimaComa) + " y" + divisores.substring(ultimaComa + 1);
}

document.write(resultado + divisores + ".");