const formulario = document.getElementById("formularioCompra");

formulario.addEventListener("submit", calcularCompra);

function calcularCompra(evento) {
    evento.preventDefault();
    const producto = document.getElementById("producto").value;
    const precio = Number(document.getElementById("precio").value);
    const cantidad = Number(document.getElementById("cantidad").value);
    const descuento = Number(document.getElementById("descuento").value);
    const resultado = document.getElementById("resultado");

    if (producto === "" || precio <= 0 || cantidad <= 0) {
        resultado.innerHTML = "Por favor, ingresa datos válidos.";

    } else {
        const subtotal = precio * cantidad;
        const iva = subtotal * 0.19;
        const totalConIva = subtotal + iva;
        const valorDescuento = totalConIva * (descuento / 100);
        const totalPagar = totalConIva - valorDescuento;

        resultado.innerHTML = `
            <strong>Producto:</strong> ${producto}<br>
            <strong>Precio:</strong> $${precio.toLocaleString()}<br>
            <strong>Cantidad:</strong> ${cantidad}<br>
            <strong>Subtotal:</strong> $${subtotal.toLocaleString()}<br>
            <strong>IVA 19%:</strong> $${iva.toLocaleString()}<br>
            <strong>Descuento:</strong> $${valorDescuento.toLocaleString()}<br>
            <strong>Total a pagar:</strong> $${totalPagar.toLocaleString()}
        `;
    }
}