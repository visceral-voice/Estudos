package modelo.heranca;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("AB")
public class AlunoBolsista extends Aluno {

	private Double valor;

	public AlunoBolsista() {
	}

	public AlunoBolsista(Long matricula, String nome, Double valor) {
		super(matricula, nome);
		this.valor = valor;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

}
