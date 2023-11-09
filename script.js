const html = document.documentElement
const startMenu = document.getElementById("startMenu")
const MenuQuickSettings = document.getElementById("quickSettingsMenu")

function MenuOn( ) {
    
    if (html.classList.contains("MenuOn")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove('open')
    } else {
        html.classList.add("MenuOn")
        startMenu.classList.add('open')
    }
    if (html.classList.contains("MenuOn")) {
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
    }
}


function MenuOnQuickSettings() {
    if (html.classList.contains("MenuOnQuickSettings")) {
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
    } else {
        html.classList.add("MenuOnQuickSettings")
        MenuQuickSettings.classList.add("open")
    }
    if (html.classList.contains("MenuOnQuickSettings")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove("open")
    }
}


function updateClock() {
    const timeAndDate = document.getElementById('timeAndDate');
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    
    const now = new Date();
    
    // Obtenha o horário no formato americano (12 horas, AM/PM)
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Obtenha a data no formato americano (mês/dia/ano)
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    time.textContent = `${timeString}`;
    date.textContent = `${dateString}`;

}

setInterval(updateClock, 1000);

updateClock();

