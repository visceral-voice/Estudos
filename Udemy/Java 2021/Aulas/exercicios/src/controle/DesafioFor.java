package controle;

public class DesafioFor {
	
	public static void main(String[] args) {
		
		String valor = "#";
		for(int i = 1; i <= 5; i++) {
			System.out.println(valor);
			valor += "#";
		}
		
		//Vers�o do Des�fio
		//N�o pode usar valor n�merico para controlar o la�o
		valor = "#";
		for(int i = valor.length(); i <= "#####".length(); i++) {
			System.out.println(valor);
			valor += "#";
		}
		
		valor = "";
		do {
			valor += "#";
			System.out.println(valor);
		} while (!valor.equals("#####"));
		
		for(String v = "#"; !v.equals("######"); v += "#") {
			System.out.println(v);
		}
	}

}
