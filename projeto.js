function gerarAleatoriosOtimizado() {
    // Criação de um array com números de 1 a 60
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    
    // Embaralhar os números
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]]; // Troca
    }

    // Selecionar os 6 primeiros números únicos
    const resultado = numeros.slice(0, 6);

    console.log("Resultado Final (Otimizado):", resultado);
}

undefined
function benchmark(callback) {
    const start = performance.now(); // Tempo inicial
    callback();
    const end = performance.now(); // Tempo final
    return end - start; // Tempo decorrido
}

undefined
function gerarAleatorios() {
    var vetor = [];
    var geracoes = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        geracoes.push(aleatorio);
        if (vetor.includes(aleatorio)) {
            continue;
        }
        vetor.push(aleatorio);
    }

    console.log("Finais (Original):", vetor);
}

undefined
// Medir o tempo do algoritmo original
const tempoOriginal = benchmark(gerarAleatorios);

// Medir o tempo do algoritmo otimizado
const tempoOtimizado = benchmark(gerarAleatoriosOtimizado);

// Calcular a melhoria em termos percentuais
const melhoria = ((tempoOriginal - tempoOtimizado) / tempoOriginal) * 100;

console.log(`Tempo do algoritmo original: ${tempoOriginal.toFixed(2)} ms`);
console.log(`Tempo do algoritmo otimizado: ${tempoOtimizado.toFixed(2)} ms`);
console.log(`Melhoria de desempenho: ${melhoria.toFixed(2)}%`);

VM731:14 Finais (Original): (6) [60, 32, 13, 58, 25, 36]
VM722:14 Resultado Final (Otimizado): (6) [14, 15, 33, 51, 49, 41]
VM737:10 Tempo do algoritmo original: 0.20 ms
VM737:11 Tempo do algoritmo otimizado: 0.30 ms
VM737:12 Melhoria de desempenho: -50.00%
undefined
