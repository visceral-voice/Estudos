open module app.calculo {
	
	exports br.com.srpp.app.calculo;
	
	//exports br.com.srpp.app.calculo.interno 
	//	to app.financeiro;
	
	requires transitive app.logging; // transitive para o pacote para os modulos que usarem esse modulo
	
	requires app.api;
	provides br.com.srpp.app.Calculadora
	    with br.com.srpp.app.calculo.CalculadoraImpl;
}