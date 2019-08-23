package com.miempresa.program.api.rest1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.miempresa.program.api.rest1.models.entity.Cliente;
import com.miempresa.program.api.rest1.models.services.IUsuarioService;


@CrossOrigin(origins = {"http://localhost:8100"})
@RestController
@RequestMapping("/api")
public class UsuarioRestController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@GetMapping("/usuarios")
	public List<Cliente> index(){
		
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	public Cliente show (@PathVariable Long id) {
		
		return usuarioService.findById(id);
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente create (@RequestBody Cliente cliente) {
		
		return usuarioService.save(cliente);		
	}
	
	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente update(@RequestBody Cliente cliente, @PathVariable Long id) {
		
		Cliente usuarioActual = usuarioService.findById(id);
		
		usuarioActual.setNombre(cliente.getNombre());
		usuarioActual.setApellido(cliente.getApellido());
		usuarioActual.setEmail(cliente.getEmail());
		
		return usuarioService.save(usuarioActual);
		
	}
	
	
	@DeleteMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		usuarioService.delete(id);
		
	}

}
