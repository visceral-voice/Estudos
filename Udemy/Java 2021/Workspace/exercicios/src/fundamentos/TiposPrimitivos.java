package fundamentos;

public class TiposPrimitivos {
	
	public static void main(String[] args) {
		//Tipos numericos inteiros
		byte anosDeEmpresa = 23;
		short numeroDeVoos = 542;
		int id = 56789;
		long pontosAcumulados = 3_134_845_223L;
		
		//Tipos numericos reais
		float salario = 11_445.44F;
		double vendasAcumuladas = 2_991_797_103.01;
		
		//Tipo bolleano
		boolean estaDeFerias = false;
		
		//TIpo char
		char status = 'A';
		
		//Dias de empresa
		System.out.println(anosDeEmpresa * 365);
		
		//Numero de viagens
		System.out.println(numeroDeVoos / 2);
		
		//Pontos por real
		System.out.println(pontosAcumulados / vendasAcumuladas);
		
		System.out.println(id + ": Ganha --> " + salario);
		System.out.println("Férias? " + estaDeFerias);
		System.out.println("Status :" + status);
	}

}
