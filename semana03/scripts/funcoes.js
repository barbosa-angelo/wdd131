let nome = "Antonia";
let sobrenome = "Francesca";

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

var nomeCompleto = function (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

var nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

document.getElementById("nomeCompleto").innerHTML = nomeCompleto(nome, sobrenome);