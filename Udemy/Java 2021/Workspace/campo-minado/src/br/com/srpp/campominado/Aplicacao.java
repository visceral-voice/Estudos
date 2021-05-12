package br.com.srpp.campominado;

import br.com.srpp.campominado.modelo.Tabuleiro;
import br.com.srpp.campominado.visao.TabuleiroConsole;

public class Aplicacao {

	public static void main(String[] args) {
		
		Tabuleiro tabuleiro = new Tabuleiro(6, 6, 3);
		new TabuleiroConsole(tabuleiro);
	}
}
