package teste.umpraum;

import Dto.Dao;
import modelo.umpraum.Assento;
import modelo.umpraum.Cliente;

public class ObterClienteAssento {

	public static void main(String[] args) {
		
		Dao<Cliente> clienteDao = new Dao<>(Cliente.class);
		
		Cliente cliente = clienteDao.obterPorId(5L);
		System.out.println(cliente.getAssento().getNome());
		
		clienteDao.fechar();
		
		Dao<Assento> assentoDao = new Dao<>(Assento.class);
		
		Assento assento = assentoDao.obterPorId(5L);
		System.out.println(assento.getCliente().getNome());
		
		assentoDao.fechar();
	}
}
