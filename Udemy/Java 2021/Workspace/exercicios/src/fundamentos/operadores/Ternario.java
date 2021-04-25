package fundamentos.operadores;

public class Ternario {
	
	public static void main(String[] args) {
		
		double media = 8.6;
		String resultadoFinal = media >= 7.0 ? "aprovado" : "em recuperação";
		System.out.printf("O aluno está %s", resultadoFinal);
		
		boolean bomComportamento = true;
		boolean passouPorMedia = media >= 7;
		boolean temDesconto = bomComportamento && passouPorMedia;
		String resultado = temDesconto ? "sim." : "não.";
		System.out.printf("\nTem desconto? %s", resultado);
	}

}
