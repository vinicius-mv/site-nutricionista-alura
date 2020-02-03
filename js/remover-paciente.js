let tabela = document.querySelector(".tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    if (event.target.textContent == "⌦") {

        event.target.parentNode.classList.add("fadeOut"); //adiciona class com efeito de opacidade que dura 500ms
        setInterval(function () { //função que remove após o efeito de 500ms 
            event.target.parentNode.remove(); //event.target  ==  <td>       event.target.parentNode = <tr>
        }, 500);
    }
})


