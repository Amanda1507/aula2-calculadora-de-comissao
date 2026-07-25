const botaoMensagem = document.getElementById("botao")
const nome = document.getElementById("nome").value
const botao2 = document.getElementById("botao2")

function mostrarMensagem(){
    alert(`EnViAdO cOm SuCeSsO!`);
    document.getElementById("nome").value = ""
}

function trocarCor(){
    const body = document.getElementById("body")
    const cor = document.getElementById("cor")
    body.classList = cor.value
}

botaoMensagem.addEventListener("click", mostrarMensagem)

botao2.addEventListener("click", trocarCor)