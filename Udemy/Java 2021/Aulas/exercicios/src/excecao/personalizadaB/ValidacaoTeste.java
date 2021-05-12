package excecao.personalizadaB;

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
		
		try {
			Validar.aluno(null);
		} catch (StringVaziaException e) {
			e.printStackTrace();
		} catch (NumeroForaIntervaloException e) {
			e.printStackTrace();
		}
		
		System.out.println("Fim. :)");
	}

}
