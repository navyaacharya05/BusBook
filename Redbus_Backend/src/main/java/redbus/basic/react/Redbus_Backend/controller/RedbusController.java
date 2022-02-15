package redbus.basic.react.Redbus_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import redbus.basic.react.Redbus_Backend.service.BusbookService;
import redbus.basic.react.Redbus_Backend.service.PassengerService;

@RestController
public class RedbusController 
{
	@Autowired
	BusbookService bservice;
	@Autowired
	PassengerService pservice;
}
