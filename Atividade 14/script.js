//*1- Duas Variáveis*//

// Cálculo da diferença entre duas variáveis
function calcularDiferenca(a, b) {
    return Math.abs(a - b);
}

// Cálculo do resultado da expressão: (2 * a) + (3 * b)
function calcularExpressao(a, b) {
    return (2 * a) + (3 * b);
}

// Cálculo do produto das duas variáveis
function calcularProduto(a, b) {
    return a * b;
}

// Exibir os resultados no html e no console
function exibirResultados(a, b) {
    var diferenca = calcularDiferenca(a, b);
    var resultadoExpressao = calcularExpressao(a, b);
    var produto = calcularProduto(a, b);

    var output = "Diferença entre as variáveis: " + diferenca + "<br>" +
                 "O dobro da primeira mais o triplo da segunda variável: " + resultadoExpressao + "<br>" +
                 "A multiplicação das duas variáveis: " + produto;

    document.getElementById("output").innerHTML = output;
}

function exibirResultadosConsole(a, b) {
    var diferenca = calcularDiferenca(a, b);
    var resultadoExpressao = calcularExpressao(a, b);
    var produto = calcularProduto(a, b);

    console.log("Diferença entre as variáveis: " + diferenca);
    console.log("O dobro da primeira mais o triplo da segunda variável: " + resultadoExpressao);
    console.log("A multiplicação das duas variáveis: " + produto);
}

// Envio do formulário
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var valorA = parseInt(document.getElementById("valorA").value);
    var valorB = parseInt(document.getElementById("valorB").value);

    exibirResultados(valorA, valorB);
    exibirResultadosConsole(valorA, valorB)
})

//*2- Taxa de Desconto*//

