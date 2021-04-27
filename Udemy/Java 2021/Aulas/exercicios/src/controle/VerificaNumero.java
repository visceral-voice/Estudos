package controle;

import java.util.Scanner;

public class VerificaNumero {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite um número: ");
		int numero = entrada.nextInt();
		
		if (numero >= 0 && numero <= 10) {
			System.out.printf("\nO número %d está entre 0 e 10!", numero);
		} else {
			System.out.printf("\nO número %d não está entre 0 e 10!", numero);
		}
		
		if (numero % 2 == 0) {
			System.out.printf("\nO número %d é par!", numero);
		} else {
			System.out.printf("\nO número %d não é par!", numero);
		}
		
		entrada.close();
	}

}
