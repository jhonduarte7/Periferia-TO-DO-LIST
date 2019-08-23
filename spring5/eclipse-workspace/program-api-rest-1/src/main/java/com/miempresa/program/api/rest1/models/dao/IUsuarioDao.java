package com.miempresa.program.api.rest1.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.miempresa.program.api.rest1.models.entity.Cliente;

public interface IUsuarioDao extends CrudRepository<Cliente, Long> {
	
	

}
