const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", registrarPersona);

function registrarPersona(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
    const ciudad = document.getElementById("ciudad").value;
    const resultado = document.getElementById("resultado");

    if (nombre === "" || edad === "" || correo === "" || ciudad === "") {
        resultado.innerHTML = "Por favor, completa todos los campos.";
    } else {
        resultado.innerHTML = `
            Hola, <strong>${nombre}</strong>.
            Tienes ${edad} años y vives en ${ciudad}.
            Tu correo es ${correo}.
        `;
    }
}