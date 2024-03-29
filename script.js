const html = document.documentElement
const startMenu = document.getElementById("startMenu")
const MenuQuickSettings = document.getElementById("quickSettingsMenu")
const SearchMenu = document.getElementById("searchMenu")
const NotificationsMenu = document.getElementById("notificationsMenu")
const MenuWidgets = document.getElementById("widgetsMenu")
const overflow = document.getElementById("overflow")
const body = document.getElementById("body")

function MenuOn() {
    
    if (html.classList.contains("MenuOn")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove('open')
    } else {
        html.classList.add("MenuOn")
        startMenu.classList.add('open')
    };
    if (html.classList.contains("MenuOn")) {
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
        html.classList.remove("MenuOnSearchContainer")
        SearchMenu.classList.remove("open")
        html.classList.remove("MenuNotificationsOn")
        NotificationsMenu.classList.remove("open")
        html.classList.remove("MenuOnWidgets")
        MenuWidgets.classList.remove("open")
    };
    
}

function MenuOnQuickSettings() {
    if (html.classList.contains("MenuOnQuickSettings")) {
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
    } else {
        html.classList.add("MenuOnQuickSettings")
        MenuQuickSettings.classList.add("open")
    };
    if (html.classList.contains("MenuOnQuickSettings")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove("open")
        html.classList.remove("MenuOnSearchContainer")
        SearchMenu.classList.remove("open")
        html.classList.remove("MenuNotificationsOn")
        NotificationsMenu.classList.remove("open")
        html.classList.remove("MenuOnWidgets")
        MenuWidgets.classList.remove("open")
    }
}

function MenuOnSearchContainer() {
    if (html.classList.contains("MenuOnSearchContainer")) {
        html.classList.remove("MenuOnSearchContainer")
        SearchMenu.classList.remove("open")
    } else {
        html.classList.add("MenuOnSearchContainer")
        SearchMenu.classList.add("open")
    };
    if (html.classList.contains("MenuOnSearchContainer")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove("open")
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
        html.classList.remove("MenuNotificationsOn")
        NotificationsMenu.classList.remove("open")
        html.classList.remove("MenuOnWidgets")
        MenuWidgets.classList.remove("open")
    }
}

function MenuNotificationsOn() {
    if (html.classList.contains("MenuNotificationsOn")) {
        html.classList.remove("MenuNotificationsOn")
        NotificationsMenu.classList.remove("open")
    } else {
        html.classList.add("MenuNotificationsOn")
        NotificationsMenu.classList.add("open")
    };
    if (html.classList.contains("MenuNotificationsOn")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove("open")
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
        html.classList.remove("MenuOnSearchContainer")
        SearchMenu.classList.remove("open")
        html.classList.remove("MenuOnWidgets")
        MenuWidgets.classList.remove("open")
    }
}

function MenuOnWidgets() {
    if (html.classList.contains("MenuOnWidgets")) {
        html.classList.remove("MenuOnWidgets")
        MenuWidgets.classList.remove("open")
    } else {
        html.classList.add("MenuOnWidgets")
        MenuWidgets.classList.add("open")
    };
    if (html.classList.contains("MenuOnWidgets")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove('open')
        html.classList.remove("MenuOnQuickSettings")
        MenuQuickSettings.classList.remove("open")
        html.classList.remove("MenuOnSearchContainer")
        SearchMenu.classList.remove("open")
        html.classList.remove("MenuNotificationsOn")
        NotificationsMenu.classList.remove("open")
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

// GET API
fetch('https://api.weatherapi.com/v1/forecast.json?key=a3821ce7915048e09b1200451231311&q=Oslo&days=1&aqi=yes&alerts=yes')
    .then(response => response.json())
    .then(data => {
        let iconUrl = 'https:' + data.current.condition.icon;
        document.getElementById('iconWeather').src = iconUrl;

        const temperature = document.getElementById('temperature')
        temperature.innerHTML = data['current']['temp_c'] + '°C'

        const textCondition = document.getElementById("sunny");
        text_code = data['current']['condition']['text']
        textCondition.innerHTML = text_code;
    })
    .catch(error => {
        console.error('Erro ao chamar a API', error);
    });

function rotateAnimation() {
    
}
