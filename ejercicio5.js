function aplicarDescuento (precio, porcentajeDescuento) {
    let descuento = precio * porcentajeDescuento;
    let precioFinal = precio - descuento;
    return precioFinal
}

const precioMesa = 120000;
const precioSofa = 300000;

let precioFinalMesa = aplicarDescuento(precioMesa, 0.10);
let precioFinalSofa = aplicarDescuento(precioSofa, 0.25);

console.log(`Precio original mesa: $${precioMesa} - Descuento: 10% - Precio final: $${precioFinalMesa}`);
console.log(`Precio original sofa: $${precioSofa} - Descuento: 25% - Precio final: $${precioFinalSofa}`);