package br.com.srpp.calculadora.modelo;

import java.util.ArrayList;
import java.util.List;

public class Memoria {
	
	private enum TipoComando {
		ZERAR, NUMERO, DIV, MULT, SUB, SOMA, IGUAL, VIRGULA, SINAL;
	};
	
	private static final Memoria instancia = new Memoria();
	
	private static List<MemoriaObservador> observadores = new ArrayList<>();
	
	private String textoAtual = "";
	private String textoBuffer = "";
	private boolean substituir = false;
	private TipoComando ultimaOperacao = null;
	
	private Memoria () {
		
	}
	
	public static Memoria getInstancia () {
		return instancia;
	}
	
	public String getTextoAtual () {
		return textoAtual.isEmpty() ? "0" : textoAtual;
	}
	
	public void adicionarObservador(MemoriaObservador observador) {
		observadores.add(observador);
	}
	
	public void processaComando (String texto) {
		TipoComando tipoComando = obterTipoComando(texto);
		
		if (tipoComando == null) {
			return;
		} else if (tipoComando == TipoComando.ZERAR) {
			textoAtual = "";
			textoBuffer = "";
			substituir = false;
			ultimaOperacao = null;
		} else if (tipoComando == TipoComando.NUMERO || tipoComando == TipoComando.VIRGULA) {
			textoAtual = substituir ? texto : textoAtual + texto;
			substituir = false;
		} else if (tipoComando == TipoComando.SINAL) {
			textoAtual = textoAtual.contains("-") ? textoAtual.substring(1) : "-".concat(textoAtual) ;
		} else {
			substituir = true;
			textoAtual = getResultadoOperacao();
			textoBuffer = textoAtual;
			ultimaOperacao = tipoComando;
		}
		
		observadores.forEach(o -> o.valorAlterado(getTextoAtual()));
	}

	private String getResultadoOperacao() {
		if (ultimaOperacao == null || ultimaOperacao == TipoComando.IGUAL) {
			return textoAtual;
		}
		
		double numeroBuffer = Double.parseDouble(textoBuffer.replace(",", "."));
		double numeroAtual = Double.parseDouble(textoAtual.replace(",", "."));
		
		double resultado = 0;
		
		if (ultimaOperacao == TipoComando.SOMA) {
			resultado = numeroBuffer + numeroAtual;
		} else if (ultimaOperacao == TipoComando.SUB) {
			resultado = numeroBuffer - numeroAtual;
		} else if (ultimaOperacao == TipoComando.MULT) {
			resultado = numeroBuffer * numeroAtual;
		} else if (ultimaOperacao == TipoComando.DIV) {
			resultado = numeroBuffer / numeroAtual;
		}
		
		String resultadoString = Double.toString(resultado).replace(".", ",");
		boolean inteiro = resultadoString.endsWith(",0");
		
		return inteiro ? resultadoString.replace(",0", "") : resultadoString;
	}

	private TipoComando obterTipoComando(String texto) {
		if ("0".equals(texto) && textoAtual.isEmpty()) {
			return null;
		}
		
		try {
			Integer.parseInt(texto);
			return TipoComando.NUMERO;
		} catch (Exception e) {
			if ("AC".equals(texto)) {
				return TipoComando.ZERAR;
			} else if ("/".equals(texto)) {
				return TipoComando.DIV;
			} else if ("*".equals(texto)) {
				return TipoComando.MULT;
			} else if ("-".equals(texto)) {
				return TipoComando.SUB;
			} else if ("+".equals(texto)) {
				return TipoComando.SOMA;
			} else if ("=".equals(texto)) {
				return TipoComando.IGUAL;
			} else if (",".equals(texto) && !textoAtual.contains(",")) {
				return TipoComando.VIRGULA;
			} else if ("±".equals(texto)) {
				return TipoComando.SINAL;
			}
		}
		
		return null;
	}

}
