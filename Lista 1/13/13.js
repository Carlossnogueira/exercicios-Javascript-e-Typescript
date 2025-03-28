// Escreva um programa que leia 3 números inteiros e imprima na tela os valores em ordem decrescente.

try{
    /*
        Para entrada de dados no navegador:
        let numberOne = Number(prompt("Digite o primeiro número"));
        let numbertwo = Number(prompt("Digite o primeiro número"));
        let numberThree = Number(prompt("Digite o primeiro número"));
    */
    let numberOne = 5;
    let numbertwo = 3;
    let numberThree = 2;

    if(numberOne > numbertwo & numberOne > numberThree){
        if(numbertwo > numberThree ) {
            console.log(`${numberOne}, ${numbertwo}, ${numberThree}`);
        } else{
            console.log(`${numberOne}, ${numberThree}, ${numbertwo}`);
        }
    }

    if(numbertwo > numberThree & numbertwo > numberOne){
        if(numberThree > numberOne ) {
            console.log(`${numbertwo}, ${numberThree}, ${numberOne}`);
        } else{
            console.log(`${numbertwo}, ${numberOne}, ${numberThree}`);
        }
    }

    if(numberThree > numberOne & numberThree > numbertwo){
        if(numbertwo > numberOne ) {
            console.log(`${numberThree}, ${numbertwo}, ${numberOne}`);
        } else{
            console.log(`${numberThree}, ${numberOne}, ${numbertwo}`);
        }
    }

} catch(e){
    console.log(e);
}