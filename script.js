function mostrarPreguntas() {
    var preguntasContainer = document.getElementById("preguntas-container");

    if (preguntasContainer.style.display === "none" || preguntasContainer.style.display === "") {
        preguntasContainer.style.display = "block";
    } else {
        preguntasContainer.style.display = "none";
    }
}


