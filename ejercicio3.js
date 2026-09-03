let totalCompra = 0;
let respuesta = confirm('¿Desea agregar un producto al carrito?');

while (respuesta === true) {
    const valorProducto = parseFloat(prompt('Ingrese el valor del producto:'));
    if(isNaN(valorProducto)) {
        alert('El valor ingresado no es un número válido');
    } else {
        totalCompra += valorProducto;
    }
    respuesta = confirm('¿Desea agregar un producto al carrito?');
}

alert(`El total de su compra es: ${totalCompra}`);

