package controle;

import java.util.Scanner;

public class NumeroPrimo {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite um n�mero..: ");
		int numero = entrada.nextInt();
		
		boolean numeroPrimo = true;
		
		for (int x = 2; x < numero; x++) {
			if (numero % x == 0) {
				numeroPrimo = false;
				break;
			}
		}
		
		if (numeroPrimo == true) {
			System.out.printf("O n�mero %d � um n�mero primo!", numero);
		} else {
			System.out.printf("O n�mero %d n�o � um n�mero primo!", numero);
		}
		
		entrada.close();
	}

}
