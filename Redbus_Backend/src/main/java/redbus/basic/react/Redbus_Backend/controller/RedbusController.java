package redbus.basic.react.Redbus_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;

import redbus.basic.react.Redbus_Backend.service.BusbookService;
import redbus.basic.react.Redbus_Backend.service.PassengerService;

public class RedbusController 
{
	@Autowired
	BusbookService bservice;
	@Autowired
	PassengerService pservice;
}
