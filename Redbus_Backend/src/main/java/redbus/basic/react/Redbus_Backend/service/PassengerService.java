package redbus.basic.react.Redbus_Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import redbus.basic.react.Redbus_Backend.repo.PassengerRepository;

@Service
public class PassengerService 
{
	@Autowired
	PassengerRepository prepo;
}
