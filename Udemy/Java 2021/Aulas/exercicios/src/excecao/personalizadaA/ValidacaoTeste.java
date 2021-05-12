package excecao.personalizadaA;

import excecao.Aluno;

public class ValidacaoTeste {
	
	public static void main(String[] args) {
		
		try {
			Aluno aluno = new Aluno("Ana", 7);		
			Validar.aluno(aluno);
		} catch (IllegalArgumentException e) {
			System.out.println(e.getMessage());
		} catch (NumeroForaIntervaloException | StringVaziaException e) {
			System.out.println(e.getMessage());
		}
		
		System.out.println("Fim. :)");
	}

}
