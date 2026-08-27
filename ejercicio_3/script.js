const formulario = document.getElementById("formularioNotas");
formulario.addEventListener("submit", calcularNota);

function calcularNota(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const nota1Texto = document.getElementById("nota1").value;
    const nota2Texto = document.getElementById("nota2").value;
    const nota3Texto = document.getElementById("nota3").value;
    const resultado = document.getElementById("resultado");
    if (
        nombre === "" ||
        nota1Texto === "" ||
        nota2Texto === "" ||
        nota3Texto === ""
    ) {
        resultado.className = "error";
        resultado.innerHTML =
            "Por favor, completa todos los campos.";

        return;
    }
    const nota1 = Number(nota1Texto);
    const nota2 = Number(nota2Texto);
    const nota3 = Number(nota3Texto);
    if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        resultado.className = "error";
        resultado.innerHTML =
            "Las notas deben estar entre 0.0 y 5.0.";

        return;
    }
    const definitiva = (nota1 + nota2 + nota3) / 3;

    if (definitiva >= 3.5) {
        resultado.className = "aprobado";
        resultado.innerHTML = `
            <strong>Estudiante:</strong> ${nombre}<br>
            <strong>Nota definitiva:</strong> ${definitiva.toFixed(2)}<br>
            <strong>Estado:</strong> APROBADO
        `;

    } else {
        resultado.className = "reprobado";
        resultado.innerHTML = `
            <strong>Estudiante:</strong> ${nombre}<br>
            <strong>Nota definitiva:</strong> ${definitiva.toFixed(2)}<br>
            <strong>Estado:</strong> REPROBADO
        `;
    }
}