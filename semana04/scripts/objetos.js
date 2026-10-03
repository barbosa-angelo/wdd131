let umCurso = {
    codigo: "WDD131",
    nome: "Fundamentos da Web Dinâmica",
    creditos: 2,
    secoes: [
        {
            secao: "001",
            matriculado: 95,
            instrutor: "Roberto Marinho"
        },
        {
            secao: "002",
            matriculado: 80,
            instrutor: "Romeu Tuman"
        }
    ]
};


function definirInformacoesCurso(curso) {
    document.querySelector("#nomeCurso").innerHTML = `${curso.codigo} - ${curso.nome}`;
}

function exibirSecoes(curso) {
    const tbody = document.querySelector("#secoes tbody");
    let linhas = "";
    for (const secao of curso.secoes) {
        linhas += `<tr>
        <td>${secao.secao}</td>
        <td>${secao.matriculado}</td>
        <td>${secao.instrutor}</td>
        </tr>`
    }
    tbody.innerHTML = linhas;
}