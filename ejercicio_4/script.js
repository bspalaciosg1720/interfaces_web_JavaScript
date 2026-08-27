const formulario = document.getElementById("formularioProducto");
const tablaProductos = document.getElementById("tablaProductos");
const mensaje = document.getElementById("mensaje");
const totalProductos = document.getElementById("totalProductos");
const valorInventario = document.getElementById("valorInventario");
let productos = [];
formulario.addEventListener("submit", agregarProducto);

function agregarProducto(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precioTexto = document.getElementById("precio").value;
    const cantidadTexto = document.getElementById("cantidad").value;
    const categoria = document.getElementById("categoria").value;
    if (
        nombre === "" ||
        precioTexto === "" ||
        cantidadTexto === "" ||
        categoria === ""
    ) {
        mensaje.className = "error";
        mensaje.innerHTML =
            "Por favor, completa todos los campos.";

        return;
    }
    const precio = Number(precioTexto);
    const cantidad = Number(cantidadTexto);
    if (precio <= 0 || cantidad <= 0) {
        mensaje.className = "error";
        mensaje.innerHTML =
            "El precio y la cantidad deben ser mayores que 0.";

        return;
    }
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };
    productos.push(producto);
    mensaje.className = "exito";
    mensaje.innerHTML =
        "Producto agregado correctamente.";
    formulario.reset();
    mostrarProductos();
}


function mostrarProductos() {
    tablaProductos.innerHTML = "";
    productos.forEach(function(producto, indice) {
        const fila = document.createElement("tr");
        const valorTotal =
            producto.precio * producto.cantidad;
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>${producto.cantidad}</td>
            <td>$${valorTotal.toLocaleString()}</td>
            <td>
                <button
                    class="boton-eliminar"
                    onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>
            </td>
        `;
        tablaProductos.appendChild(fila);
    });
    actualizarTotales();
}


function eliminarProducto(indice) {
    productos.splice(indice, 1);
    mostrarProductos();

}

function actualizarTotales() {
    totalProductos.innerHTML = productos.length;
    let total = 0;
    productos.forEach(function(producto) {
        total =
            total +
            producto.precio * producto.cantidad;

    });
    valorInventario.innerHTML =
        total.toLocaleString();

}