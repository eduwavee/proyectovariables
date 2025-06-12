let numeroMultiplo = parseInt(prompt("Escribe un número"));

if (numeroMultiplo % 2 === 0) {
  document.write("El " + numeroMultiplo + " es divisible por 2.");
} else if (numeroMultiplo % 3 === 0) {
  document.write("El " + numeroMultiplo + " es divisible por 3.");
} else if (numeroMultiplo % 5 === 0) {
  document.write("El " + numeroMultiplo + " es divisible por 5.");
} else if (numeroMultiplo % 7 === 0) {
  document.write("El " + numeroMultiplo + " es divisible por 7.");
}