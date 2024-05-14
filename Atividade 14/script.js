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

// Envio do form
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var valorA = parseInt(document.getElementById("valorA").value);
    var valorB = parseInt(document.getElementById("valorB").value);

    exibirResultados(valorA, valorB);
    exibirResultadosConsole(valorA, valorB)
})

//*2- Taxa de Desconto*//

function calcularDescontoINSS(salario) {
    let taxaDesconto, valorDesconto;
    if (salario <= 1000) {
        taxaDesconto = 0.08; //Salário até R$ 1.000,00 – desconto de 8%//
    } else if (salario <= 1500) {
        taxaDesconto = 0.085; //Salário entre R$ 1.000,01 e 1.500,00 – desconto de 8,5%//
    } else {
        taxaDesconto = 0.09; //Salário acima de 1.500,00 – desconto de 9%//
    }
    valorDesconto = salario * taxaDesconto;
    return [taxaDesconto, valorDesconto];
}

function calcularFolhaPagamento() {
    const nome = document.getElementById("nome").value;
    const salario = parseFloat(document.getElementById("salario").value);
    
    const [taxaDesconto, valorDesconto] = calcularDescontoINSS(salario);
    const salarioLiquido = salario - valorDesconto;

    //Mostrar resultado

    document.getElementById("resultadoNome").textContent = nome;
    document.getElementById("resultadoSalario").textContent = salario.toFixed(2);
    document.getElementById("resultadoINSS").textContent = valorDesconto.toFixed(2);
    document.getElementById("resultadoLiquido").textContent = salarioLiquido.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}