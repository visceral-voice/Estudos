package fundamentos.operadores;

public class Ternario {
	
	public static void main(String[] args) {
		
		double media = 8.6;
		String resultadoFinal = media >= 7.0 ? "aprovado" : "em recupera��o";
		System.out.printf("O aluno est� %s", resultadoFinal);
		
		boolean bomComportamento = true;
		boolean passouPorMedia = media >= 7;
		boolean temDesconto = bomComportamento && passouPorMedia;
		String resultado = temDesconto ? "sim." : "n�o.";
		System.out.printf("\nTem desconto? %s", resultado);
	}

}
