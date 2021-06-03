package br.com.srpp.exerciciossb.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SegundoController {
	
	@GetMapping(path = {"/saudacao", "/ola"})
	public String ola2() {
		return "Saudações Spring Boot!";
	}

}
