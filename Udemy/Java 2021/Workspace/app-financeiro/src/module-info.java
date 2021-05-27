module app.financeiro {
	
	requires java.base; //Pacote padrão, não necessita da declaração
	//requires app.calculo;
	requires app.api;
	
	uses br.com.srpp.app.Calculadora;
}