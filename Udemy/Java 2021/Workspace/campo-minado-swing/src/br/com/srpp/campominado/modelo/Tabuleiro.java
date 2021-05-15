package br.com.srpp.campominado.modelo;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class Tabuleiro implements CampoObservador {
	
	private final int linhas;
	private final int colunas;
	private final int bombas;

	private final List<Campo> campos = new ArrayList<>();
	private final List<Consumer<ResultadoEvento>> observadores = new ArrayList<>();

	public Tabuleiro(int linhas, int colunas, int bombas) {
		this.linhas = linhas;
		this.colunas = colunas;
		this.bombas = bombas;
		
		criarCampos();
		associarVizinhos();
		distribuirBombas();
	}
	
	public void paraCadaCampo (Consumer<Campo> funcao) {
		campos.forEach(funcao);
	}
	
	public void registrarObservador(Consumer<ResultadoEvento> observador) {
		observadores.add(observador);
	}
	
	private void notificarObservadores(boolean resultado) {
		observadores.stream().forEach(observador -> observador.accept(new ResultadoEvento(resultado)));
	}
	
	private void criarCampos() {
		for (int linha = 0; linha < linhas; linha++) {
			for (int coluna = 0; coluna < colunas; coluna++) {
				Campo campo = new Campo(linha, coluna);
				campo.registrarObservador(this);
				campos.add(campo);
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
		campos.stream()
			.filter(campo -> campo.getLinha() == linha && campo.getColuna() == coluna)
			.findFirst()
			.ifPresent(campo -> campo.abrir());
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
	
	public int getLinhas() {
		return linhas;
	}

	public int getColunas() {
		return colunas;
	}

	@Override
	public void eventoOcorreu(Campo campo, CampoEvento evento) {
		if (evento == CampoEvento.EXPLODIR) {
			mostraMinas();
			notificarObservadores(false);
		} else if (objetivoAlcancado()) {
			notificarObservadores(true);
		}
	}
	
	private void mostraMinas() {
		campos.stream()
			  .filter(c -> c.isMinado())
			  .filter(c -> !c.isMarcado())
			  .forEach(c -> c.setAberto(true));
	}	
	
}
