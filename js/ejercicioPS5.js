
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let precioFinal;


if (precio > 1000) {
  precioFinal = precio * 0.85; // Aplica 15% de descuento
  document.write("Se aplicó un descuento del 15%. El precio final es: $" + precioFinal);
} else {
  precioFinal = precio;
  document.write("No se aplica descuento. El precio final es: $" + precioFinal);
}