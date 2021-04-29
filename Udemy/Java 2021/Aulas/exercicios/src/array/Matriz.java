package array;

import java.util.Arrays;
import java.util.Scanner;

public class Matriz {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe a quantidade de alunos..: ");
		int qtdeAlunos = entrada.nextInt();
		
		System.out.print("Informe a quantidade de notas por aluno..: ");
		int qtdeNotas = entrada.nextInt();
		
		double[][] notasAlunos = new double[qtdeAlunos][qtdeNotas]; 
		
		double totalNotas = 0;
		for (int i = 0; i < notasAlunos.length; i++) {
			for (int j = 0; j < notasAlunos[i].length; j++) {
				System.out.printf("Informe a nota %d do aluno %d...: ", j + 1, i + 1);
				notasAlunos[i][j] = entrada.nextDouble();
				totalNotas += notasAlunos[i][j]; 
			}
		}
		
		double media = totalNotas / (qtdeAlunos * qtdeNotas);
		System.out.println("O valor da média da turma é " + media);
		
		for (double[] notasAluno : notasAlunos) {
			System.out.println(Arrays.toString(notasAluno));
		}

		entrada.close();
	}

}
