package colecoes;

import java.util.ArrayDeque;
import java.util.Deque;

public class Pilha {
	
	// FILO First in Last out
	public static void main(String[] args) {
		
		Deque<String> livros = new ArrayDeque<>();
		
		livros.add("O pequeno príncipe");
		livros.push("Don Quixote");
		livros.add("O Hobbit");
		livros.push("A biblia do Java");
		
		System.out.println(livros.peek());
		System.out.println(livros.element());
		
		for (String livro : livros) {
			System.out.println(livro);
		}
		
		System.out.println(livros.pop());
		System.out.println(livros.poll());
		System.out.println(livros.remove());
		System.out.println(livros.poll());
		System.out.println(livros.poll());
		
		//livros.size();
		//livros.clear();
		//livros.contains(...);
		//livros.isEmpty();
	}

}
