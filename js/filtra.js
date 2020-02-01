let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function (event) {
    let pacientes = document.querySelectorAll(".paciente");

    if (this.value != 0) {
        let expressaoRegular = new RegExp(this.value, "i");

        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let TdNome = paciente.querySelector(".info-nome");
            let nome = TdNome.textContent;
            
            if(expressaoRegular.test(nome)){
                paciente.classList.remove("invisivel");
            }
            else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        pacientes.forEach(function(xicoDeSa){
            xicoDeSa.classList.remove("invisivel"); 
        });
    }
})