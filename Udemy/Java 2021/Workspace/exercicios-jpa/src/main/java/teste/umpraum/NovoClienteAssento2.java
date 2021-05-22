package teste.umpraum;

import Dto.Dao;
import modelo.umpraum.Assento;
import modelo.umpraum.Cliente;

public class NovoClienteAssento2 {
	
	public static void main(String[] args) {
		
		Assento assento = new Assento("52F");
		Cliente cliente = new Cliente("Maria", assento);
		
		Dao<Cliente> dao = new Dao<>(Cliente.class);
		dao.incluirAtomico(cliente);
	}

}
