function citation() {
    const content = document.getElementById("citation").textContent; // Récupération du contenu de l'id "citation"
    console.log(content);
}

document.getElementById("button").addEventListener("click", citation);