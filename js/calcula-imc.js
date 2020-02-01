let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; //nome pessoal da nutricionista alterado via js

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    let tdPeso = pacientes[i].querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = pacientes[i].querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let imc = peso / (altura * altura);
    let tdImc = pacientes[i].querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso > 40 && peso < 200){
        return true;
    }
    return false;
}

function validaAltura(altura){
    if(altura > 1.0 && altura < 2.5){
        return true;
    }
    return false;
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}


