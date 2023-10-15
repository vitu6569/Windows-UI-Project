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
    const timeAndDate = document.getElementById('timeAndDate')
    const time = document.getElementById('time')
    const date = document.getElementById('date')
    
    const now = new Date();
    
    const timeString = now.getHours() + ":" + now.getMinutes()
    
    const options = { year: 'numeric',  day: 'numeric', month: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    
    
    time.textContent = `${timeString}`
    date.textContent = `${dateString}`

    if (timeString <= 6) {
        time.classList.remove('day')
    } else if (timeString >= 12) {
        time.classList.add('day')
    }
}

setInterval(updateClock, 1000)

updateClock();
