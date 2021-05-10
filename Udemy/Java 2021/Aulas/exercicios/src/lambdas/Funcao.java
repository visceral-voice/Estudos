package lambdas;

import java.util.function.Function;

public class Funcao {
	
	public static void main(String[] args) {
		
		Function<Integer, String> parOuImpar = 
				numero -> numero % 2 == 0 ? "Par" : "Ímpar";
		
		Function<String, String> oResulatdoE = 
				valor -> "O resultado é: " + valor;
				
		Function<String, String> empolgado = 
				valor -> valor + "!!!";

		Function<String, String> duvida = 
				valor -> valor + "???";
		
		String resulatdoFinal1 = parOuImpar
								 .andThen(oResulatdoE)
								 .andThen(empolgado)
								 .apply(32);
		System.out.println(resulatdoFinal1);

		String resulatdoFinal2 = parOuImpar
				 .andThen(oResulatdoE)
				 .andThen(duvida)
				 .apply(33);
		System.out.println(resulatdoFinal2);
		
		System.out.println(parOuImpar.apply(32));
		
	}

}
