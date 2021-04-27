package controle;

import java.util.Scanner;

public class AdivinheNumero {
	
	public static void main(String[] args) {
		
		final int QTDE = 10;
		
		Scanner entrada = new Scanner(System.in);
		
		int numero = 85;
		int palpite = 0;
		System.out.println("Tente adivinhar o n�mero secreto!");
		
		for (int i = 0; i < 10; i++) {
			System.out.printf("Voc� tem um total de %d tentativas...: ", QTDE - i);
			palpite = entrada.nextInt();
			if (palpite == numero) {
				System.out.println("Parab�ns, voc� encontrou o n�mero secreto!");
				break;
			} else if (palpite < numero) {
				System.out.println("O n�mero digitado � menor que o n�mero secreto!");
			} else {
				System.out.println("O n�mero digitado � maior que o n�mero secreto!");
			}
		}
		System.out.println("Fim do jogo!");
		entrada.close();
	}

}
