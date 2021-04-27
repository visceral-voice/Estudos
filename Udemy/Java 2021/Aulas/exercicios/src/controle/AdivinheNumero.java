package controle;

import java.util.Scanner;

public class AdivinheNumero {
	
	public static void main(String[] args) {
		
		final int QTDE = 10;
		
		Scanner entrada = new Scanner(System.in);
		
		int numero = 85;
		int palpite = 0;
		System.out.println("Tente adivinhar o número secreto!");
		
		for (int i = 0; i < 10; i++) {
			System.out.printf("Você tem um total de %d tentativas...: ", QTDE - i);
			palpite = entrada.nextInt();
			if (palpite == numero) {
				System.out.println("Parabéns, você encontrou o número secreto!");
				break;
			} else if (palpite < numero) {
				System.out.println("O número digitado é menor que o número secreto!");
			} else {
				System.out.println("O número digitado é maior que o número secreto!");
			}
		}
		System.out.println("Fim do jogo!");
		entrada.close();
	}

}
