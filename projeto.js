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
