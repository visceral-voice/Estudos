package classe;

public class DataTeste {
	
	public static void main(String[] args) {
		
		Data d1 = new Data(26,4,1973);
		
		var d2 = new Data();
		d2.dia = 15;
		d2.mes = 2;
		d2.ano = 1944;
		
		String dataFormatada1 = d1.obterDataFormatada();
		
		System.out.println(dataFormatada1);
		System.out.println(d2.obterDataFormatada());
		
		d1.imprimirDataFormatada();
		d2.imprimirDataFormatada();
		
		Data d3 = new Data();
		d3.imprimirDataFormatada();
	}

}
