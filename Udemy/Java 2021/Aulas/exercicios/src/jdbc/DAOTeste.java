package jdbc;

public class DAOTeste {
	
	public static void main(String[] args) {
		
		DAO dao = new DAO();
		
		String sql = "INSERT INTO pessoas (nome) VALUES (?)";
		dao.incluir(sql, "João Batita");
		System.out.println(dao.incluir(sql, "Guilherme Fonseca"));
		
		dao.close();
	}

}
