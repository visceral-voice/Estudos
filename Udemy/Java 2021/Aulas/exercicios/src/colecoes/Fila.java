package colecoes;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
	
	public static void main(String[] args) {
		
		Queue<String> fila = new LinkedList<>();
		
		// FIFO First in First out
		
		// Offer e Add -> adicionam elementos na fila
		// Diferen�a do comportamento ocorre quando a fila est� cheia
		fila.add("Ana"); //retorna false
		fila.offer("Bia"); // lan�a uma excess�o
		fila.add("Carlos");
		fila.offer("Daniel");
		fila.add("Rafaela");
		fila.offer("Gui");
		
		// peek e element -> Obtem o pr�ximo elemento da fila sem remover
		// Diferen�a do comportamento ocorre quando a fila est� vazia
		System.out.println(fila.peek()); // retorna null
		System.out.println(fila.element()); // lan�a uma excess�o
		System.out.println(fila.peek());
		System.out.println(fila.element());
		
		// Poll e Remove -> Obtem o pr�ximo elemento da fila e remove ele
		//Diferen�a do comportamento ocorre quando a fila est� vazia
		System.out.println(fila.poll()); // retorna null
		System.out.println(fila.remove()); // lan�a uma excess�o
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
