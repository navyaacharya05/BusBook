package redbus.basic.react.Redbus_Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import redbus.basic.react.Redbus_Backend.entity.Busbook;
import redbus.basic.react.Redbus_Backend.repo.BusbookRepository;

@Service
public class BusbookService 
{
	@Autowired
	BusbookRepository brepo;
	
	public List<Busbook> listing(){
		return brepo.findAll();
	}
}
