package controle;

import java.util.Scanner;

public class VerificaNumero {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite um n�mero: ");
		int numero = entrada.nextInt();
		
		if (numero >= 0 && numero <= 10) {
			System.out.printf("\nO n�mero %d est� entre 0 e 10!", numero);
		} else {
			System.out.printf("\nO n�mero %d n�o est� entre 0 e 10!", numero);
		}
		
		if (numero % 2 == 0) {
			System.out.printf("\nO n�mero %d � par!", numero);
		} else {
			System.out.printf("\nO n�mero %d n�o � par!", numero);
		}
		
		entrada.close();
	}

}
