package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ConsultarPessoas2 {

	
	public static void main(String[] args) throws SQLException {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe o termo de pesquisa.: ");
		String pesquisa = entrada.nextLine();
		
		String sql = "SELECT * FROM pessoas WHERE nome LIKE ?";
		
		Connection conexao = Conexao.conectar();
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,"%" + pesquisa + "%");
		
		ResultSet resultado = stmt.executeQuery();
		
		if (resultado.next()) {
			
			List<Pessoa> pessoas = new ArrayList<>();
			
			do {
				int codigo = resultado.getInt("codigo");
				String nome = resultado.getString("nome");
				
				pessoas.add(new Pessoa(codigo, nome));
			} while (resultado.next());
			
			for (Pessoa p : pessoas) {
				System.out.println(p.getCodigo() + " ===> " + p.getNome());
			}
			
		} else {
			System.out.println("Não encontrado nenhum registro para a pesquisa digitada!");			
			
		}
				
		entrada.close();
		stmt.close();
		conexao.close();
	}
}
