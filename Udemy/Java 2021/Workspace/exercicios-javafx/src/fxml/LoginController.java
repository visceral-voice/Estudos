package fxml;

import org.controlsfx.control.Notifications;

import javafx.fxml.FXML;
import javafx.geometry.Pos;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

public class LoginController {
	@FXML
	private TextField campoEmail;
	@FXML
	private PasswordField campoSenha;
	
	public void entrar () {
		boolean emailValido = campoEmail.getText().equals("srpp@srpp.com.br");
		boolean senhaValida = campoSenha.getText().equals("123");

		if (emailValido && senhaValida) {
			Notifications.create()
			.position(Pos.TOP_CENTER)
			.title("Login FXML")
			.text("Login efetuado com sucesso!")
			.showInformation();
		} else if (emailValido && !senhaValida) {
			Notifications.create()
			.position(Pos.TOP_CENTER)
			.title("Login FXML")
			.text("Senha não cadastrada ou inválida!")
			.showError();
		}  else if (!emailValido || !senhaValida) {
			Notifications.create()
			.position(Pos.TOP_CENTER)
			.title("Login FXML")
			.text("E-mail inválido!")
			.showError();
		} 
	}
}
