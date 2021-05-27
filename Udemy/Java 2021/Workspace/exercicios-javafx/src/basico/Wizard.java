package basico;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class Wizard extends Application {
	
	private Stage janela;
	private Scene tela1;
	private Scene tela2;
	private Scene tela3;
	
	@Override
	public void start(Stage primaryStage) throws Exception {
		janela = primaryStage;
		
		criaCena1();
		criaCena2();
		criaCena3();
		
		janela.setScene(tela1);
		janela.setTitle("Wizard tela 01");
		janela.show();
	}
	
	private void criaCena1 () {
		Button botaoProximo = new Button("Ir p/ próxima tela >>");
		botaoProximo.setOnAction(e -> {
			janela.setTitle("Wizard tela 02");
			janela.setScene(tela2);
		});

		HBox boxWizard = new HBox();
		boxWizard.setAlignment(Pos.CENTER);
		boxWizard.setSpacing(10);
		boxWizard.getChildren().add(botaoProximo);
		
		tela1 = new Scene(boxWizard, 400, 400);
	}
	
	private void criaCena2() {
		Button botaoVoltar = new Button("<< Voltar p/ tela anterior");
		botaoVoltar.setOnAction(e -> {
			janela.setTitle("Wizard tela 01");
			janela.setScene(tela1);
		});

		Button botaoProximo = new Button("Ir p/ próxima tela >>");
		botaoProximo.setOnAction(e -> {
			janela.setTitle("Wizard tela 03");
			janela.setScene(tela3);
		});		
		
		HBox boxWizard = new HBox();
		boxWizard.setAlignment(Pos.CENTER);
		boxWizard.setSpacing(10);
		boxWizard.getChildren().add(botaoVoltar);
		boxWizard.getChildren().add(botaoProximo);
		
		tela2 = new Scene(boxWizard, 400, 400);		
	}

	private void criaCena3() {
		Button botaoVoltar = new Button("<< Voltar p/ tela anterior");
		botaoVoltar.setOnAction(e -> {
			janela.setTitle("Wizard tela 02");
			janela.setScene(tela2);
		});

		Button botaoFinalizar = new Button("Finalizar");
		botaoFinalizar.setOnAction(e -> {
			System.exit(0);
		});		
		
		HBox boxWizard = new HBox();
		boxWizard.setAlignment(Pos.CENTER);
		boxWizard.setSpacing(10);
		boxWizard.getChildren().add(botaoVoltar);
		boxWizard.getChildren().add(botaoFinalizar);
		
		tela3 = new Scene(boxWizard, 400, 400);		
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
