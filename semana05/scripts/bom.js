const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
    exibirLista(capitulo);
});

function obterListaDeCapitulos() {
    return JSON.parse(localStorage.getItem("minhaListaFavoritosLDM"));
}

function definirListaDeCapitulos() {
    localStorage.setItem("minhaListaFavoritosLDM", JSON.stringify(arrayCapitulos));
}

function exibirLista(item) {
    let li = document.createElement("li");
    let botaoExcluir = document.createElement("button");
    li.textContent = item;
    botaoExcluir.textContent = "❌";
    botaoExcluir.classList.add("delete");
    li.append(botaoExcluir);
    list.append(li);

    botaoExcluir.addEventListener('click', function () {
        list.removeChild(li);
        excluirCapitulo(li.textContent);
        input.focus();
    });
}

function excluirCapitulo(capitulo) {
    capitulo = capitulo.slice(0, capitulo.length - 1);
    arrayCapitulos = arrayCapitulos.filter((item) => item !== capitulo);
    definirListaDeCapitulos();
}

button.addEventListener('click', function () {

    if (input.value.trim() !== "") {
        exibirLista(input.value);
        arrayCapitulos.push(input.value);
        definirListaDeCapitulos();
        input.value = "";
        input.focus();
    } else {
        alert("Preencha a informação do livro e capítulo!")
    }
    input.focus();
});


