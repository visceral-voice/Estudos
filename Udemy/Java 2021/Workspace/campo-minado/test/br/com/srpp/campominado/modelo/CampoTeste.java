package br.com.srpp.campominado.modelo;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.srpp.campominado.excecao.ExplosaoException;

class CampoTeste {

	private Campo campo;
	
	@BeforeEach
	void iniciarCampo() {
		campo = new Campo(3,3);
	}
	
	@Test
	void testeVizinhoRealdistancia1Esquerda() {
		Campo vizinho = new Campo(3, 2);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}

	@Test
	void testeVizinhoRealdistancia1Direita() {
		Campo vizinho = new Campo(3, 4);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}
	
	@Test
	void testeVizinhoRealdistancia1Cima() {
		Campo vizinho = new Campo(2, 3);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}
	
	@Test
	void testeVizinhoRealdistancia1Baixo() {
		Campo vizinho = new Campo(4, 3);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}
	
	@Test
	void testeVizinhoRealdistancia2CimaEsquerda() {
		Campo vizinho = new Campo(2, 2);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}

	@Test
	void testeVizinhoRealdistancia2BaixoEsquerda() {
		Campo vizinho = new Campo(4, 2);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}
	
	@Test
	void testeVizinhoRealdistancia2CimaDireita() {
		Campo vizinho = new Campo(2, 4);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}

	@Test
	void testeVizinhoRealdistancia2baixoDireita() {
		Campo vizinho = new Campo(4, 4);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertTrue(resultado);
	}
	
	@Test
	void testeNaoVizinho() {
		Campo vizinho = new Campo(1, 1);
		boolean resultado = campo.adicionarVizinho(vizinho);
		assertFalse(resultado);
	}

	@Test
	void testeValorPadraoMarcado() {
		assertFalse(campo.isMarcado());
	}

	@Test
	void testeAlternarMarcacao() {
		campo.alternarMarcado();
		assertTrue(campo.isMarcado());
	}
	
	@Test
	void testeAlternarMarcacaoDuasVezes() {
		campo.alternarMarcado();
		campo.alternarMarcado();
		assertFalse(campo.isMarcado());
	}
	
	@Test
	void testeAbrirNaoMarcadoNaoMinado() {
		assertTrue(campo.abrir());
	}

	@Test
	void testeAbrirMarcadoNaoMinado() {
		campo.alternarMarcado();
		assertFalse(campo.abrir());
	}

	@Test
	void testeAbrirNaoMarcadoMinado() {
		campo.minar();
		assertThrows(ExplosaoException.class, () -> {
			campo.abrir();
		});
	}

	@Test
	void testeAbrirMarcadoMinado() {
		campo.alternarMarcado();
		campo.minar();
		assertFalse(campo.abrir());
	}

	@Test
	void testeAbrirComVizinhos() {
		Campo campo11 = new Campo(1, 1);
		Campo campo22 = new Campo(2, 2);
		
		campo22.adicionarVizinho(campo11);
		campo.adicionarVizinho(campo22);
		campo.abrir();
		
		assertTrue(campo.isAberto() && campo11.isAberto() && campo22.isAberto());
	}

	@Test
	void testeAbrirComVizinhosMinado() {
		Campo campo11 = new Campo(1, 1);
		Campo campo12 = new Campo(1, 2);
		campo12.minar();
		Campo campo22 = new Campo(2, 2);
		
		campo11.adicionarVizinho(campo12);
		campo22.adicionarVizinho(campo11);
		campo.adicionarVizinho(campo22);
		campo.abrir();
		
		assertTrue(campo.isAberto() && campo11.isAberto() && campo22.isAberto() && !campo12.isAberto());
	}

	@Test
	void testeObterLinha() {
		int x = campo.getLinha();
		boolean resultado = x == 3;
		assertTrue(resultado);
	}

	@Test
	void testeObterColuna() {
		int x = campo.getColuna();
		boolean resultado = x == 3;
		assertTrue(resultado);
	}

	@Test
	void testeObterObjetivoAbertoNaoMinado() {
		campo.abrir();
		assertTrue(campo.objetivoAlcancado());
	}

	@Test
	void testeObterObjetivoMarcadoMinado() {
		campo.alternarMarcado();
		campo.minar();
		assertTrue(campo.objetivoAlcancado());
	}

	@Test
	void testeObterObjetivoMarcadoNaoMinado() {
		campo.alternarMarcado();
		assertFalse(campo.objetivoAlcancado());
	}

	@Test
	void testeMinasNaVizinhacaSemBomba() {
		Campo campo22 = new Campo(2, 2);
		Campo campo23 = new Campo(2, 3);
		Campo campo24 = new Campo(2, 4);
		
		campo.adicionarVizinho(campo22);
		campo.adicionarVizinho(campo23);
		campo.adicionarVizinho(campo24);
		
		boolean resultado = campo.minasNaVizinhaca() == 0;
		
		assertTrue(resultado);
	}

	@Test
	void testeMinasNaVizinhaca1Bomba() {
		Campo campo22 = new Campo(2, 2);
		Campo campo23 = new Campo(2, 3);
		Campo campo24 = new Campo(2, 4);
		
		campo22.minar();
		
		campo.adicionarVizinho(campo22);
		campo.adicionarVizinho(campo23);
		campo.adicionarVizinho(campo24);
		
		boolean resultado = campo.minasNaVizinhaca() == 1;
		
		assertTrue(resultado);
	}

	@Test
	void testeMinasNaVizinhaca3Bomba() {
		Campo campo22 = new Campo(2, 2);
		Campo campo23 = new Campo(2, 3);
		Campo campo24 = new Campo(2, 4);
		
		campo22.minar();
		campo23.minar();
		campo24.minar();
		
		campo.adicionarVizinho(campo22);
		campo.adicionarVizinho(campo23);
		campo.adicionarVizinho(campo24);
		
		boolean resultado = campo.minasNaVizinhaca() == 3;
		
		assertTrue(resultado);
	}

	
	@Test
	void testeReiniciar() {
		campo.alternarMarcado();
		campo.minar();
		campo.abrir();
		
		campo.reiniciar();
		
		assertTrue(!campo.isAberto() && !campo.isMarcado() && !campo.isMinado());
	}
	
	@Test
	void testeToStringMarcado() {
		campo.alternarMarcado();
		boolean estaMarcado = "x".equals(campo.toString());
		
		assertTrue(estaMarcado);
	}

	@Test
	void testeToStringExplosao() {
		campo.abrir();
		campo.minar();
		boolean explodiu = "*".equals(campo.toString());
		
		assertTrue(explodiu);
	}

	@Test
	void testeToStringAberto() {
		campo.abrir();
		boolean abriu = " ".equals(campo.toString());
		
		assertTrue(abriu);
	}

	@Test
	void testeToStringFechado() {
		boolean estado = "?".equals(campo.toString());
		
		assertTrue(estado);
	}
	
	@Test
	void testeToStringBomba() {
		Campo campo22 = new Campo(2, 2);
		Campo campo23 = new Campo(2, 3);
		Campo campo24 = new Campo(2, 4);
		
		campo22.minar();
		campo23.minar();
		campo24.minar();
		
		campo.adicionarVizinho(campo22);
		campo.adicionarVizinho(campo23);
		campo.adicionarVizinho(campo24);
		campo.abrir();
		
		boolean resultado = "3".equals(campo.toString());
		
		assertTrue(resultado);
	}

}
