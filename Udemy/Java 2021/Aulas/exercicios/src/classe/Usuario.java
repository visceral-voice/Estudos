package classe;

public class Usuario {
	
	String nome;
	String email;
	
	public boolean equals(Object objeto) {
		if (objeto instanceof Usuario) {
			Usuario outro = (Usuario) objeto;
			boolean nomeIgual = this.nome.equals(outro.nome);
			boolean emailIgual = this.email.equals(outro.email);
			return nomeIgual && emailIgual;
		} else {
			return false;
		}
	}

	//Sera implementado depois
	public int hashCode() {
		return 1;
	}
}
