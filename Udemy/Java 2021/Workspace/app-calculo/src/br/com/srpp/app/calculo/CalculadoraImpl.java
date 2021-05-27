package br.com.srpp.app.calculo;

import br.com.srpp.app.Calculadora;
import br.com.srpp.app.calculo.interno.OperacoesAritmeticas;
import br.com.srpp.app.logging.Logger;

public class CalculadoraImpl implements Calculadora {
	
	private String id = "abc";

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	private OperacoesAritmeticas opAritmeticas = new OperacoesAritmeticas();

	public Double soma(Double... nums) {
		Logger.info("Somando...");
		return opAritmeticas.soma(nums);
	}
	
	
}
