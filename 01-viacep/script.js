document.addEventListener('DOMContentLoaded', function() {
    const resultadoDiv = document.getElementById('resultado');

    // Exemplo de consumo de API
    fetch('https://api.exemplo.com/dados')
        .then(response => response.json())
        .then(data => {
            resultadoDiv.textContent = JSON.stringify(data);
        })
        .catch(error => {
            resultadoDiv.textContent = 'Erro ao buscar dados: ' + error;
        });
});
