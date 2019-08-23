package com.miempresa.program.api.rest1.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miempresa.program.api.rest1.models.dao.IUsuarioDao;
import com.miempresa.program.api.rest1.models.entity.Cliente;


@Service
public class UsuarioServiceImpl implements IUsuarioService{

	@Autowired
	private IUsuarioDao usuarioDao;
	@Override
	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		
		return (List<Cliente>) usuarioDao.findAll();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Cliente findById(Long id) {
		
		return usuarioDao.findById(id).orElse(null);
	}
	@Override
	@Transactional
	public Cliente save(Cliente cliente) {
		
		return usuarioDao.save(cliente);
	}
	@Override
	@Transactional
	public void delete(Long id) {
		usuarioDao.deleteById(id);
		
	}

}
