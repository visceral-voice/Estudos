package colecoes;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
	
	public static void main(String[] args) {
		
		Queue<String> fila = new LinkedList<>();
		
		// FIFO First in First out
		
		// Offer e Add -> adicionam elementos na fila
		// Diferença do comportamento ocorre quando a fila está cheia
		fila.add("Ana"); //retorna false
		fila.offer("Bia"); // lança uma excessão
		fila.add("Carlos");
		fila.offer("Daniel");
		fila.add("Rafaela");
		fila.offer("Gui");
		
		// peek e element -> Obtem o próximo elemento da fila sem remover
		// Diferença do comportamento ocorre quando a fila está vazia
		System.out.println(fila.peek()); // retorna null
		System.out.println(fila.element()); // lança uma excessão
		System.out.println(fila.peek());
		System.out.println(fila.element());
		
		// Poll e Remove -> Obtem o próximo elemento da fila e remove ele
		//Diferença do comportamento ocorre quando a fila está vazia
		System.out.println(fila.poll()); // retorna null
		System.out.println(fila.remove()); // lança uma excessão
		System.out.println(fila.poll());
		System.out.println(fila.remove());
		System.out.println(fila.poll());
		System.out.println(fila.remove());
		
		//fila.size();
		//fila.clear();
		//fila.isEmpty();
		//fila.contains(...);
   }

}
