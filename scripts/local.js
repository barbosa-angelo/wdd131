const sensacaoTermica = document.getElementById("sensacaoTermica")

const temperatura = 38;
const velocidadeVento = 5;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return `${13.12 + (0.6215 * temperatura) - ((11.17 * velocidadeVento) ** 0.16) + ((0.3965 * temperatura * velocidadeVento) ** 0.16)}°C`;
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoTermica.innerHTML = calcularSensacaoTermica(temperatura, velocidadeVento)
} else {
    sensacaoTermica.innerHTML = "N/A"
}