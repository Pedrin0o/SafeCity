// Inicializa o mapa do Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 }, // Posição inicial (São Paulo)
        zoom: 12
    });

    const occurrences = [];

    // Evento de envio do formulário
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        
        // Adiciona um marcador no mapa
        const marker = new google.maps.Marker({
            position: map.getCenter(), // Posição atual do mapa
            map: map,
            title: description
        });

        // Armazena a ocorrência
        occurrences.push({ description, category });
        updateOccurrenceList();
        
        // Limpa o formulário
        document.getElementById("form").reset();
    });

    // Atualiza a lista de ocorrências
    function updateOccurrenceList() {
        const list = document.getElementById("occurrences-list");
        list.innerHTML = "";
        occurrences.forEach(occ => {
            const li = document.createElement("li");
            li.textContent = `${occ.category}: ${occ.description}`;
            list.appendChild(li);
        });
    }
}
