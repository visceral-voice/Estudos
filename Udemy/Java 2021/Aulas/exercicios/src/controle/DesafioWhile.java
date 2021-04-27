package controle;

import java.util.Scanner;

public class DesafioWhile {
	
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		double nota = 0.0;
		double notaTotal = 0.0;
		int qtdeNotas = 0;
		
		while (nota != -1) {
			System.out.print("Digite uma nota v�lida ou -1 para encerrar:..");
			nota = entrada.nextDouble();
			
			if(nota >= 0.0 && nota <= 10.0) {
				notaTotal += nota;
				qtdeNotas++;
			} else if(nota != -1) {
				System.out.println("Nota inv�lida, digite uma nota v�lida!");
			}
		}
		
		double media = notaTotal / qtdeNotas;
		System.out.printf("\nA m�dia das notas digitas � = %.2f", media);
		
		entrada.close();
	}

}
