// requisição de forma assíncrona com JavaScript. --> AJAX
let botaoBuscar = document.querySelector("#btn-buscar-paciente");

botaoBuscar.addEventListener("click", function () {

    let xrh = new XMLHttpRequest();

    xrh.open("get", "https://api-pacientes.herokuapp.com/pacientes");

    xrh.send();

    xrh.addEventListener("load", function () {
    
    let erroAjax = document.querySelector("#erro-ajax");
        if(xrh.status == 200) {
            let resposta = xrh.responseText;
            console.log(resposta);
            let pacientes = JSON.parse(resposta);
            console.log(pacientes);
            erroAjax.classList.add("invisivel");
    
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
            
            setTimeout(function (){     //limpa a msg de erro apos 5 seg
                erroAjax.classList.add("invisivel");
            }, 5000);

            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
});



//xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");