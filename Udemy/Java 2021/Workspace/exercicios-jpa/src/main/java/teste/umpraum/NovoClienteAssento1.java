package teste.umpraum;

import Dto.Dao;
import modelo.umpraum.Assento;
import modelo.umpraum.Cliente;

public class NovoClienteAssento1 {
	
	public static void main(String[] args) {
		
		Assento assento = new Assento("45D");
		Cliente cliente = new Cliente("Ana", assento);
		
		Dao<Object> dao = new Dao<>();
		
		dao.abrirTransacao()
		   .incluir(assento)
		   .incluir(cliente)
		   .fecharTransacao()
		   .fechar();
		
	}

}
