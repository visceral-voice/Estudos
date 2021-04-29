package array;

public class ForEach {
	
	public static void main(String[] args) {
		
		double[] notas = { 6.9, 8.9, 9.5, 9.9 };
		
		for (int i = 0; i < notas.length; i++) {
			System.out.print(notas[i] + " ");
		}
		
		System.out.println("");
		
		for (double nota : notas) {
			System.out.print(nota + " ");
		}
	}

}
