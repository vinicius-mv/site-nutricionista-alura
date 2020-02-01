let tabela = document.querySelector(".tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {

    event.target.parentNode.classList.add("fadeOut"); //adiciona class com efeito de opacidade que dura 500ms
    setInterval(function () { //função que remove após o efeito de 500ms 
        event.target.parentNode.remove(); //event.target = <td>       event.target.parentNode = <tr>
    }, 500);
})
/*
this - chama o dono do evento
target - o alvo do evento, quem realmente sofreu o evento
*/

/*
jeito pouco eficiente -> cria um listener pra cada linha da tabela

pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (event) {
        console.log("duplo click");
        this.remove(); //se refere ao dono do evento, ao causador do evento
    })
})
*/
