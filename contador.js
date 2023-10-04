function checkCounter() {
    let contador = localStorage.getItem('contador');
    if (contador === null) {
        contador = 0;
    } else {
        contador = parseInt(contador);
    }
    return contador;
}

function updateCounter() {
    let contador = checkCounter();
    contador++;
    localStorage.setItem('contador', contador);
    document.getElementById('contador').textContent = contador;
}

window.addEventListener('load', () => {
    updateCounter();
});


