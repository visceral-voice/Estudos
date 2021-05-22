package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class AtualizarPessoa {

	public static void main(String[] args) throws SQLException {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe o codigo buscado.: ");
		int codigo = entrada.nextInt();
		
		String sql = "SELECT * FROM pessoas WHERE codigo = ?";
		Connection conexao = Conexao.conectar();
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1, codigo);
		
		ResultSet resultado = stmt.executeQuery();
		
		if (resultado.next()) {
			System.out.println(resultado.getString("nome"));
			entrada.nextLine();
			System.out.print("Informe o novo nome.: ");
			String novoNome = entrada.nextLine();
			
			stmt.close();
			
			sql = "UPDATE pessoas SET nome = ? WHERE codigo = ?";		
			stmt = conexao.prepareStatement(sql);
			stmt.setString(1, novoNome);
			stmt.setInt(2, codigo);
			
			stmt.execute();
			System.out.printf("O nome do código %d foi atualizado!", codigo);
			
		} else {
			System.out.println("Não encontrado nenhum registro para o codigo buscado!");			
		}
				
		entrada.close();
		stmt.close();
		conexao.close();
	}
}
