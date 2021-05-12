package br.com.srpp.campominado.visao;

import java.util.Scanner;

import br.com.srpp.campominado.excecao.ExplosaoException;
import br.com.srpp.campominado.excecao.SairException;
import br.com.srpp.campominado.modelo.Tabuleiro;

public class TabuleiroConsole {
	
	private Tabuleiro tabuleiro;
	private Scanner entrada = new Scanner(System.in); 

	
	public TabuleiroConsole(Tabuleiro tabuleiro) {
		this.tabuleiro = tabuleiro;
		
		executarJogo();
	}


	private void executarJogo() {
		try {
			boolean continuar = true;
			
			while (continuar) {
				
				cicloDoJogo();
				
				System.out.println("Outra partida? (s/n) ");
				String resposta = entrada.nextLine();
				
				if ("n".equalsIgnoreCase(resposta)) {
					continuar = false;
				} else {
					tabuleiro.reiniciar();
				}
			}
			System.out.println("Tchau!!!");
		} catch (SairException e) {
			System.out.println("Tchau!!!");
		} finally {
			entrada.close();
		}
	}


	private void cicloDoJogo() {
		
		try {
			int linha;
			int coluna;
			
			while(!tabuleiro.objetivoAlcancado()) {
				System.out.println(tabuleiro);
				
				String digitado = capturarValorDigitado("Digite (x, y): ");
				linha = Integer.parseInt(digitado.split(",")[0].trim());
				coluna  = Integer.parseInt(digitado.split(",")[1].trim());
				
				digitado = capturarValorDigitado("1 - Abrir ou 2 (Des)Marcar: ");
				
				if ("1".equals(digitado)) {
					tabuleiro.abrir(linha, coluna);
				} else if ("2".equals(digitado)) {
					tabuleiro.alternarMarcado(linha, coluna);
				}
			}
			System.out.println(tabuleiro);
			System.out.println("Você ganhou!");
		} catch (ExplosaoException e) {
			System.out.println(tabuleiro);
			System.out.println("Você perdeu!");
		}
	}


	private String capturarValorDigitado(String texto) {
		System.out.print(texto);
		String digitado = entrada.nextLine();
		
		if ("sair".equalsIgnoreCase(digitado)) {
			throw new SairException();
		}
		
		return digitado;
	}
}
