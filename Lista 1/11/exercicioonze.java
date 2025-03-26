/* 
 *   Ler  dois  valores  inteiros  para  as  variáveis  A  e  B,  efetuar  a  troca  dos  valores  de  modo  que  a  variável  A  passe  a  possuir o valor da variável B, e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.
*/

import java.util.Scanner;

public class exercicioonze {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b,temp = 0;
        System.out.println("Digite o primeiro valor: ");
        a = sc.nextInt();
        System.out.println("Digite o segundo valor: ");
        b = sc.nextInt();
        temp = b; // 2
        b = a; // 1
        a = temp; // 2
        System.out.println("O valor da variavel A agora é: " + a + " e a variavel B agora é: " + b);
        sc.close();
    }
}
