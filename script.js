// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(texto);
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    //Guarda resultado en una variable para poder acceder a sus hijos
    const resultado = document.querySelector('.encriptador__resultado');
    //Guarda en una variable la imagen hija de resultado para ocultarla en css
    const imagen = resultado.querySelector('img');
    //Guarda los mensajes para eliminarlos del css.
    const mensajes = resultado.querySelector('.encriptador__resultado__mensajes');
    //Guarda los mensajes para eliminarlos del css
    const textoResultado = resultado.querySelector('.encriptador__resultado__texto__resaltar');
    const textoEliminar = resultado.querySelector('.encriptador__resultado__texto');

    // Mostrar el texto encriptado/desencriptado
    textoResultado.textContent = texto;

    // Mostrar el contenedor de resultados y ocultar imagen y mensajes de error
    resultado.style.display = 'flex'; // Asegúrate de que el contenedor sea visible
    imagen.style.display = 'none';
    textoEliminar.style.display = 'none';
    
}

// Función para manejar la encriptación
function encriptar() {
    
    const textoInput = document.querySelector('.input__texto').value.trim(); // Elimina espacios al principio y al final
    console.log(textoInput); // Verifica el texto ingresado
    
    if (validarTexto(textoInput)) {
        const textoEncriptado = encriptarTexto(textoInput);
        console.log(textoEncriptado); // Verifica el texto encriptado
        mostrarResultado(textoEncriptado);
        console.log(textoInput); // Verifica el texto ingresado
    console.log(textoEncriptado); // Verifica el texto encriptado
    } else {
        alert("El texto debe estar en minúsculas y no debe contener caracteres especiales.");
        console.log(textoInput); // Verifica el texto ingresado
    console.log(textoEncriptado); // Verifica el texto encriptado
    }
}

// Función para manejar la desencriptación
function desencriptar() {
    const textoInput = document.querySelector('.input__texto').value.trim(); // Elimina espacios al principio y al final
    if (validarTexto(textoInput)) {
        const textoDesencriptado = desencriptarTexto(textoInput);
        mostrarResultado(textoDesencriptado);
    } else {
        alert("El texto debe estar en minúsculas y no debe contener caracteres especiales.");
    }
}