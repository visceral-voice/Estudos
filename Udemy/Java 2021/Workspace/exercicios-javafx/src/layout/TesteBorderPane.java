package layout;

import javafx.scene.layout.BorderPane;

public class TesteBorderPane extends BorderPane {
	
	public TesteBorderPane() {
		
		Caixa c1 = new Caixa().setTexto("Topo");
		setTop(c1);
		
		Caixa c2 = new Caixa().setTexto("Esquerda");
		setLeft(c2);
		
		Caixa c3 = new Caixa().setTexto("Direita");
		setRight(c3);
		
		Caixa c4 = new Caixa().setTexto("Fundo");
		setBottom(c4);
		
		Caixa c5 = new Caixa().setTexto("Área Central");
		setCenter(c5);
	}

}
