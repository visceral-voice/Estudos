package controle;

public class WhileDeterminado {

	public static void main(String[] args) {
		
		int contador = 0;
		
		while (contador <= 20) {
			System.out.printf("contador = %d\n", contador);
			contador += 2;
		}
	}
}
