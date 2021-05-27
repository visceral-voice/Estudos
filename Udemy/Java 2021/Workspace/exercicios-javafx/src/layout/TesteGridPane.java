package layout;

import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.RowConstraints;

public class TesteGridPane extends GridPane {
	
	public TesteGridPane() {
		
		Caixa c1 = new Caixa().setTexto("1");
		Caixa c2 = new Caixa().setTexto("2");
		Caixa c3 = new Caixa().setTexto("3");
		Caixa c4 = new Caixa().setTexto("4");
		Caixa c5 = new Caixa().setTexto("5");
		Caixa c6 = new Caixa().setTexto("6");
		
		setGridLinesVisible(true);
		
		getColumnConstraints().addAll(cc(), cc(), cc(), cc(), cc());
		getRowConstraints().addAll(rc(), rc(), rc(), rc(), rc());
		
		setHgap(10.0);
		setVgap(10.0);
		
		add(c1, 0, 0, 2, 2);
		add(c2, 1, 1, 2, 2);
		add(c3, 4, 2, 1, 3);
		add(c4, 3, 1);
		add(c5, 0, 4, 2, 1);
		add(c6, 3, 3);
		
	}
	
	private ColumnConstraints cc () {
		ColumnConstraints cc = new ColumnConstraints();
		cc.setPercentWidth(20);
		return cc;
	}

	private RowConstraints rc () {
		RowConstraints rc = new RowConstraints();
		rc.setPercentHeight(20);
		return rc;
	}
}
