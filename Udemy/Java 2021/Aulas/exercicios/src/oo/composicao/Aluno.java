package oo.composicao;

import java.util.ArrayList;
import java.util.List;

public class Aluno {
	
	String nome;
	List<Curso> cursos = new ArrayList<>();
	
	Aluno (String nome) {
		this.nome = nome;
	}

	void adicionarCurso (Curso curso) {
		this.cursos.add(curso);
		curso.alunos.add(this);
	}
	
	public String toString() {
		return nome;
	}
	
	Curso obterCursoPorNome(String nome) {
		for (Curso curso : cursos) {
			if (curso.nome.equals(nome)) {
				return curso;
			}
		}
		
		return null;
	}
}
