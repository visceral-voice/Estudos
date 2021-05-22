package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class NovaPessoa {
	
	public static void main(String[] args) throws SQLException {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Entre com o nome.: ");
		String nome = entrada.nextLine();
		
		String sql = "INSERT INTO pessoas (nome) VALUES (?)";
		
		Connection conexao = Conexao.conectar();
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, nome);
		
		if (!stmt.execute()) {
			System.out.println("Nome inserido com sucesso!");
		} else {
			System.out.println("Erro ao inserir novo nome!");
		}
		
		conexao.close();
		
		entrada.close();
	}

}
