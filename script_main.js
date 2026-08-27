const buscar = document.getElementById("buscar");
const tarjetas = document.querySelectorAll(".tarjeta");
const cantidadEjercicios =
    document.getElementById("cantidadEjercicios");
const sinResultados =
    document.getElementById("sinResultados");
const saludo =
    document.getElementById("saludo");
cantidadEjercicios.innerHTML = tarjetas.length;
mostrarSaludo();
buscar.addEventListener("input", filtrarEjercicios);

function mostrarSaludo() {
    const fecha = new Date();
    const hora = fecha.getHours();
    let mensaje = "";
    if (hora < 12) {
        mensaje = "Buenos días";
    } else if (hora < 18) {
        mensaje = "Buenas tardes";
    } else {
        mensaje = "Buenas noches";
    }
    saludo.innerHTML =
        `${mensaje}. Selecciona uno de los ejercicios disponibles.`;
}


function filtrarEjercicios() {
    const texto =
        buscar.value.toLowerCase();
    let visibles = 0;
    tarjetas.forEach(function(tarjeta) {
        const contenido =
            tarjeta.innerText.toLowerCase();
        if (contenido.includes(texto)) {
            tarjeta.classList.remove("oculto");
            visibles++;
        } else {
            tarjeta.classList.add("oculto");
        }
    });
    cantidadEjercicios.innerHTML = visibles;
    if (visibles === 0) {
        sinResultados.innerHTML =
            "No se encontraron ejercicios.";
    } else {
        sinResultados.innerHTML = "";
    }
}