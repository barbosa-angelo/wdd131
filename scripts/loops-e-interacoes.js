const DIAS = 6;
const LIMITE = 30;
let relatorioEstudante = [11, 42, 33, 64, 29, 37, 44];

console.log("Resultado loop for:")
for (let i = 0; i < relatorioEstudante.length; i++) {
    if (relatorioEstudante[i] < LIMITE) {
        console.log(relatorioEstudante[i])
    }
}

console.log("Resultado loop while:")
let i = 0
while (i < relatorioEstudante.length) {
    if (relatorioEstudante[i] < LIMITE) {
        console.log(relatorioEstudante[i])
    }
    i++;
}

console.log("Resultado loop forEach:")
relatorioEstudante.forEach(function (item) {
    if (item < LIMITE) {
        console.log(item);
    }
});

console.log("Resultado loop for...in:")
for (let i in relatorioEstudante) {
    if (relatorioEstudante[i] < LIMITE) {
        console.log(relatorioEstudante[i])
    }
}

console.log(`Nome dos próximos ${DIAS} dias:`)
const options = { weekday: 'long' };
const hoje = new Date();

let hojeString = new Intl.DateTimeFormat('pt-BR', options).format(hoje);

for (let i = 1; i <= DIAS; i++) {
    let diaSeguinte = new Date();
    diaSeguinte.setDate(hoje.getDate() + i);
    let diaSeguinteString = Intl.DateTimeFormat('pt-BR', options).format(diaSeguinte);
    console.log(diaSeguinteString);
}