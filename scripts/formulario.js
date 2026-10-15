const anoatual = document.getElementById("anoatual");
const ultimaModificacao = document.getElementById("ultimaModificacao");
const selectProduto = document.getElementById("produto");

const hoje = new Date();

anoatual.innerHTML = `${hoje.getFullYear()}`
ultimaModificacao.innerHTML = `Última Modificação: ${document.lastModified}`

const produtos = [
    {
        id: "fc-1888",
        nome: "capacitor de fluxo",
        classificacaomedia: 4.5
    },
    {
        id: "fc-2050",
        nome: "fios elétricos",
        classificacaomedia: 4.7
    },
    {
        id: "fs-1987",
        nome: "circuitos de tempo",
        classificacaomedia: 3.5
    },
    {
        id: "ac-2000",
        nome: "reator de baixa tensão",
        classificacaomedia: 3.9
    },
    {
        id: "jj-1969",
        nome: "equalizador de distorção",
        classificacaomedia: 5.0
    }
];

produtos.forEach(produto => {
    exibirLista(produto);
})

function exibirLista(item) {
    let option = document.createElement("option");
    option.textContent = item.nome;
    option.value = item.id;
    selectProduto.append(option);
}