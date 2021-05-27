package fxml;

import java.net.URL;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class AppFxml extends Application {
	
	@Override
	public void start(Stage primaryStage) throws Exception {

		String arquivoCss = getClass().getResource("/fxml/Login.css").toExternalForm();
		URL arquivoFxml = getClass().getResource("/fxml/Login.fxml");
		GridPane raiz = FXMLLoader.load(arquivoFxml);
		
		Scene cena = new Scene(raiz, 350, 400);
		cena.getStylesheets().add(arquivoCss);
		
		primaryStage.setResizable(false);
		primaryStage.setTitle("Tela de login");
		primaryStage.setScene(cena);
		primaryStage.show();
	}
	
	public static void main(String[] args) {
		launch(args);
	}

}
