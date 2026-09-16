const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

const li = document.createElement("li");
const botaoExcluir = document.createElement("button");

button.addEventListener('click', function () {

    if (input.value.trim() !== "") {
        li.textContent = input.value;
        botaoExcluir.textContent = "❌";
        botaoExcluir.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(botaoExcluir);
        list.append(li);
        input.value = "";
    } else {
        alert("Preencha a informação do livro e capítulo!")
    }
    input.focus();
});


