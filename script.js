const html = document.documentElement
const startMenu = document.getElementById("startMenu")

function MenuOn( ) {
    
    if (html.classList.contains("MenuOn")) {
        html.classList.remove("MenuOn")
        startMenu.classList.remove('open')
    } else {
        html.classList.add("MenuOn")
        startMenu.classList.add('open')
    }
}

startMenu.addEventListener('click', () => {
    startMenu.classList.remove('open');
    html.classList.remove('MenuOn')
});

// Você também pode adicionar outra lógica para abrir o container, como quando um botão é clicado.
// Por exemplo:
// const abrirBotao = document.getElementById('abrirBotao');
// abrirBotao.addEventListener('click', () => {
//     container.classList.add('open');
// });


