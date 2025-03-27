/*
 *  Escreva um programa que leia um número inteiro e exiba o seu módulo. 
 *  O módulo de um número x é: 
 *  x se x é maior ou igual a zero 
 *  x * (-1) se x é menor que zero
 */

import java.util.Scanner;

public class exercicio12 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int number = 0;

        System.out.println("Digite um número inteiro: ");
        try{
            number = sc.nextInt();

            if(number >= 0){
                System.out.println("O múdulo do número " + number + " é " + number);
            } else{
                int result = number * (-1);
                System.out.println("O múdulo do número " + number + " é " + result);
            }
        } catch(Exception e){
            System.out.println("Número inválido");
        }

        sc.close();
    }
}
