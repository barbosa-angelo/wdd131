const anoatual = document.getElementById("anoatual");
const ultimaModificacao = document.getElementById("ultimaModificacao")

const hoje = new Date();

anoatual.innerHTML = `${hoje.getFullYear()}`
ultimaModificacao.innerHTML = `Última Modificação: ${document.lastModified}` 