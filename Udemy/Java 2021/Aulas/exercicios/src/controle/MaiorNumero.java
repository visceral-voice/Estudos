package controle;

import java.util.Scanner;

public class MaiorNumero {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		int numero = 0;
		int maiorNumero = 0;
		
		for (int i = 0; i < 10; i++) {
			numero = entrada.nextInt();
			if (numero > maiorNumero) {
				maiorNumero = numero;
			}
		}
		
		System.out.printf("O maior número digitado nessa sequência foi %d.", maiorNumero);
		entrada.close();
	}

}
