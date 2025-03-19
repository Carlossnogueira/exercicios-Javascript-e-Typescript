let valores: number[] = [4,5,6,7];

function calcularOperacoes(valores: number[]): void {

    for (let i = 0; i < valores.length - 1; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            console.log(`Valor ${i + 1} e Valor ${j + 1}:`);
            console.log(`\t${valores[i]} + ${valores[j]} = ${valores[i] + valores[j]}`);
            console.log(`\t${valores[i]} * ${valores[j]} = ${valores[i] * valores[j]}\n`);
        }
    }
}

calcularOperacoes(valores);