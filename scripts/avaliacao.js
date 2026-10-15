const anoatual = document.getElementById("anoatual");
const ultimaModificacao = document.getElementById("ultimaModificacao");

const hoje = new Date();

anoatual.innerHTML = `${hoje.getFullYear()}`
ultimaModificacao.innerHTML = `Última Modificação: ${document.lastModified}`

const avaliacoes = document.getElementById("avaliacao");

let contador = localStorage.getItem("nroAvaliacoes") ? parseInt(localStorage.getItem("nroAvaliacoes")) : 0;

adicionarAvaliacoes();
avaliacoes.textContent = obterAvaliacoes();

function obterAvaliacoes() {
    return JSON.parse(localStorage.getItem("nroAvaliacoes"));
}

function adicionarAvaliacoes() {
    contador++;
    localStorage.setItem("nroAvaliacoes", JSON.stringify(contador));
}