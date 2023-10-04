const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');

function aplicar() {
    const tema = localStorage.getItem('tema');
    if (tema === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

document.getElementById('btnLight').addEventListener('click', () => {
    localStorage.setItem('tema', 'light');
    aplicar();
});

document.getElementById('btnDark').addEventListener('click', () => {
    localStorage.setItem('tema', 'dark');
    aplicar();
});

window.addEventListener('load', aplicar);
