package teste.basico;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import modelo.basico.Usuario;

public class AlterarUsuario1 {
	
	public static void main(String[] args) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("exercicios-jpa");
		EntityManager em = emf.createEntityManager();
		
		Usuario usuario = em.find(Usuario.class, 1L);
		
		usuario.setNome("Sérgio Ricardo");
		usuario.setEmail("sergio.ricardojf@gmail.com");
		
		em.getTransaction().begin();
		
		em.merge(usuario);
		
		em.getTransaction().commit();
	
		System.out.println(usuario.getNome());
		System.out.println(usuario.getEmail());
		
		em.close();
		emf.close();
	}

}
