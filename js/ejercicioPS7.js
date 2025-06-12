
let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));


let area = largo * ancho;
let perimetro = 2 * (largo + ancho);


document.write("Para un rectángulo de " + largo + " x " + ancho + ":");
document.write("<br>"); 
document.write("El área es: " + area);
document.write("<br>");
document.write("El perímetro es: " + perimetro);