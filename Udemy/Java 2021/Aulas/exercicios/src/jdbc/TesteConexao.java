package jdbc;

import java.sql.Connection;
import java.sql.SQLException;

public class TesteConexao {
	
	public static void main(String[] args) throws SQLException {
		
		/*String url = "jdbc:mysql://localhost?verifyServerCertificate=false&useSSL=true";
		//String url = "jdbc:mysql://85.10.205.173:3306/srppdatabase?verifyServerCertificate=false&useSSL=true";
		String usuario = "visceralvoice";
		String senha = "01201073";
		*/
		
		Connection conexao = Conexao.conectar();
		
		System.out.println("Conexão estabalecida com sucesso!");
		conexao.close();
	}

}
