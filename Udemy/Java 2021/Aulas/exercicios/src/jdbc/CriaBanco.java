package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class CriaBanco {
	public static void main(String[] args) throws SQLException {
		
		String url = "jdbc:mysql://localhost?verifyServerCertificate=false&useSSL=true";
		String usuario = "visceralvoice";
		String senha = "01201073";
		
		Connection conexao = DriverManager.getConnection(url, usuario, senha);
		
		Statement stmt = conexao.createStatement();
		stmt.execute("CREATE DATABASE IF NOT EXISTS curso_java");
		
		System.out.println("Banco criado com sucesso!");
		conexao.close();
	}
}
