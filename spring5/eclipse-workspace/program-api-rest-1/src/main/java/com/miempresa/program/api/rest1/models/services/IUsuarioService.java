package com.miempresa.program.api.rest1.models.services;

import java.util.List;

import com.miempresa.program.api.rest1.models.entity.Cliente;

public interface IUsuarioService {
	
	public List<Cliente> findAll();
	
	public Cliente findById (Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Long id);

}
