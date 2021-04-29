package array.desafio;

import java.util.Scanner;

public class CalculaMedia {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe a quantidade de notas que serão lançadas...: ");
		int qtdeNotas = entrada.nextInt();
		
		double[] notasAluno = new double[qtdeNotas];
		
		for (int i = 0; i < notasAluno.length; i++) {
			System.out.print("\nDigite a nota " + (i + 1) + "..: ");
			notasAluno[i] = entrada.nextDouble();
		}
		
		double totalNotas = 0.0;
		for (double notaAluno : notasAluno) {
			totalNotas += notaAluno;
		}
		double mediaNotas = totalNotas / qtdeNotas;
		System.out.printf("\nO valor da médias das notas digitadas é %.2f", mediaNotas);
		
		entrada.close();
	}
}
