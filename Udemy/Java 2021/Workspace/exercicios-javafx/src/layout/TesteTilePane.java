package layout;

import java.util.ArrayList;
import java.util.List;

import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.layout.TilePane;

public class TesteTilePane extends TilePane {
	
	public TesteTilePane() {
		
		List<Quadrado> quadrados = new ArrayList<>();
		
		for (int i = 1; i <= 10; i++) {
			quadrados.add(new Quadrado(i * 10));
		}
		
		setPadding(new Insets(20, 10, 20, 10));
		setHgap(10);
		setVgap(10);
		
		setTileAlignment(Pos.BOTTOM_RIGHT);
		setOrientation(Orientation.VERTICAL);
		
		getChildren().addAll(quadrados);
	
	}

}
