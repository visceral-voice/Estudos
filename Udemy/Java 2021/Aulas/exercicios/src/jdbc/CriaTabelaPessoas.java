package jdbc;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class CriaTabelaPessoas {
	
	public static void main(String[] args) throws SQLException {
		
		Connection conexao = Conexao.conectar();
		
		String sql = "CREATE TABLE IF NOT EXISTS pessoas ("
				+ "codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,"
				+ "nome VARCHAR(255)"
				+ ")";
		
		Statement stmt = conexao.createStatement();
		stmt.execute(sql);
		
		System.out.println("Tabela criada com sucesso!");
		conexao.close();
	}

}
