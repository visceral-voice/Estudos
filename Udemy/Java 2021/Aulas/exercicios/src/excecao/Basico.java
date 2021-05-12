package excecao;

public class Basico {
	
	public static void main(String[] args) {
		
		Aluno a1 = null;
		
		try {
			imprimirNomeDoAluno(a1);
		} catch (Exception e) {
			System.out.println("Ocoreu um erro no momento de imprimir o nome do aluno!");
		}
		
		try {
			System.out.println(7 / 0);
		} catch (ArithmeticException e) {
			System.out.println("Ocoreu o erro " + e.getMessage());
		}
		
		System.out.println("Fim!! :)");
	}
	
	public static void imprimirNomeDoAluno(Aluno aluno) {
		System.out.println("O nome do aluno é " + aluno.nome);
	}

}
