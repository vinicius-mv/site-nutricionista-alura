var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //nao deixa enviar o formulário e recarregar a pagina --> queremos apenas atualizar tabela
    //o comportamento padrao do botao dentro do formulario ou de um input tipo submit é enviar os dados do formulario para uma pagina e recarregar

    //pega os dados do formulario e cria o objeto paciente com as infos
    let form = document.querySelector(".form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    let mensagemErro = document.querySelector("#mensagem-erro");

    if (erros.length > 0) {
        mensagemErro.innerHTML = ""; //limpa mensagem de erro
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    mensagemErro.innerHTML = ""; //limpa mensagem de erro

});

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value), //funçao no arquivo: calcula-imc.js
    }
    paciente.altura = parseFloat(paciente.altura).toFixed(2);
    return paciente;
}

function montaTr(paciente) {

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    //cria as td (colunas) 
    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");


    //ligaçao dos atributos td a tr correspondente
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    let erros = [];

    if (!validaPeso(paciente.peso))
        erros.push("Peso inválido!");

    if (!validaAltura(paciente.altura))
        erros.push("Altura inválida!")

    if (paciente.nome.length < 1)
        erros.push("Nome do paciente inválido!")

    if (paciente.gordura.length < 1)
        erros.push("índice de gordura inválido!")

    return erros;
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    erros.forEach(function(erro){
        let ul = document.querySelector("#mensagem-erro");
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

