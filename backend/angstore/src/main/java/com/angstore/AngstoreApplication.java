package com.angstore;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AngstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngstoreApplication.class, args);
	}

	@Bean // This annotation tells Spring Boot that this method should be used to configure the application context.
	CommandLineRunner runenr(ClientRepository repository){
		repository.deleteAll();
		return args ->{
			Address address = new Address(
				"USA", 
				"12345", 
				"New York");

			Client client = new Client(
				"John Doe", 
				address, 
				"jonh@gmail.com");

				repository.insert(client);
		};
		
	}
}