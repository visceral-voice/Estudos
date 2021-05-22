package jdbc;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Conexao {
	
	public static Connection conectar () {
		
		try {
			Properties props = getProperties();
			
			String url = props.getProperty("banco.url");
			String usuario = props.getProperty("banco.usuario");
			String senha = props.getProperty("banco.senha");
			
			return DriverManager.getConnection(url, usuario, senha);
		} catch (SQLException | IOException e) {
			throw new RuntimeException(e);
		}	
	}
	
	private static Properties getProperties() throws IOException {
		Properties props = new Properties();
		String path = "/conexao.properties";
		props.load(Conexao.class.getResourceAsStream(path));
		return props;
	}
}
