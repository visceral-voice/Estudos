package br.com.srpp.campominado.modelo;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

import br.com.srpp.campominado.excecao.ExplosaoException;

public class Tabuleiro {
	
	private final int linhas;
	private final int colunas;
	private final int bombas;

	private final List<Campo> campos = new ArrayList<>();

	public Tabuleiro(int linhas, int colunas, int bombas) {
		this.linhas = linhas;
		this.colunas = colunas;
		this.bombas = bombas;
		
		criarCampos();
		associarVizinhos();
		distribuirBombas();
	}
	
	private void criarCampos() {
		for (int linha = 0; linha < linhas; linha++) {
			for (int coluna = 0; coluna < colunas; coluna++) {
				campos.add(new Campo(linha, coluna));
			}
		}
	}

	private void associarVizinhos() {
		for (Campo campo1 : campos) {
			for (Campo campo2 : campos) {
				campo1.adicionarVizinho(campo2);
			}
		}
		
	}
	
	public void abrir(int linha, int coluna) {
		try {
			campos.stream()
				.filter(campo -> campo.getLinha() == linha && campo.getColuna() == coluna)
				.findFirst()
				.ifPresent(campo -> campo.abrir());
		} catch (ExplosaoException e) {
			campos.forEach(c -> c.setAberto());
			throw e;
		}
	}
	
	public void alternarMarcado(int linha, int coluna) {
		campos.stream()
			.filter(campo -> campo.getLinha() == linha && campo.getColuna() == coluna)
			.findFirst()
			.ifPresent(campo -> campo.alternarMarcado());
	}

	private void distribuirBombas() {
		int camposComBomba = 0;
		do {
			int numAleatorio = (int) (Math.random() * campos.size());
			
			if(!campos.get(numAleatorio).isMinado()) {
				campos.get(numAleatorio).minar();
				camposComBomba++;
			}
		} while (camposComBomba < bombas);
	}

	public boolean objetivoAlcancado() {
		Predicate<Campo> alcancou =  campo -> campo.objetivoAlcancado();
		return campos.stream().allMatch(alcancou);
	}
	
	public void reiniciar() {
		campos.stream().forEach(campo -> campo.reiniciar());
		distribuirBombas();
	}
	
	public String toString() {
		int indice = 0;
		StringBuilder sb = new StringBuilder();
		
		sb.append("  ");
		
		for (int coluna = 0; coluna < colunas; coluna++) {
			sb.append(coluna);
			sb.append("  ");
		}
		
		sb.append("\n");
		
		for (int linha = 0; linha < linhas; linha++) {
			sb.append(linha);
			for (int coluna = 0; coluna < colunas; coluna++) {
				sb.append(" ");
				sb.append(campos.get(indice).toString());
				sb.append(" ");
				indice++;
			}
			sb.append("\n");
		}
		
		return sb.toString();
	}
}
