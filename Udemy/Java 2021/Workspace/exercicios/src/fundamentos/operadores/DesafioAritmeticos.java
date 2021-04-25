package fundamentos.operadores;

public class DesafioAritmeticos {
	
	public static void main(String[] args) {
		
		int numerador = 6 * (3 + 2);
		numerador = (int) Math.pow(numerador, 2); //Exponenciação
		int denominador = 3 * 2;
		int resultado1 = numerador / denominador;
		
		int resultado2 = ((1 - 5) * (2 - 7)) / 2;
		resultado2 = (int) Math.pow(resultado2, 2);
		
		int numeradorFinal = resultado1 - resultado2;
		numeradorFinal = (int) Math.pow(numeradorFinal, 3);
		int denominadorFinal = (int) Math.pow(10, 3);
		
		int resultadoFinal = numeradorFinal / denominadorFinal;
		
		System.out.println("O resulatdo é :" + resultadoFinal);
		
	}

}
