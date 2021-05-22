package teste.basico;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import modelo.basico.Usuario;

public class AlterarUsuario3 {

	public static void main(String[] args) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("exercicios-jpa");
		EntityManager em = emf.createEntityManager();
		
		Usuario usuario = em.find(Usuario.class, 1L);
		
		usuario.setNome("Sérgio Ricardo");
		
		em.getTransaction().begin();
		
		//Retirando o objeto do estado gerenciado.
		em.detach(usuario);
		em.merge(usuario);
		
		em.getTransaction().commit();
	
		System.out.println(usuario.getNome());
		
		em.close();
		emf.close();
	}
}
