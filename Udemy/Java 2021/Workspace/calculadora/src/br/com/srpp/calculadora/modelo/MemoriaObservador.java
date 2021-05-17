package br.com.srpp.calculadora.modelo;

@FunctionalInterface
public interface MemoriaObservador {
	
	void valorAlterado (String novoValor);

}
