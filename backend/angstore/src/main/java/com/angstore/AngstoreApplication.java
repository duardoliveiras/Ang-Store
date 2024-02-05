package com.angstore;


import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;


@SpringBootApplication
public class AngstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngstoreApplication.class, args);
	}

	@Bean // This annotation tells Spring Boot that this method should be used to configure the application context.
	CommandLineRunner runenr(ClientRepository repository, MongoTemplate mongoTemplate){
		return args ->{
			Address address = new Address(
				"USA", 
				"12345", 
				"New York");
			String email = "jonh@gmail.com";
			Client client = new Client(
				"John Doe", 
				address, 
				email
				);

			Query query = new Query();
			query.addCriteria(Criteria.where("email").is(email));

			List<Client> clients = mongoTemplate.find(query, Client.class);

			if(clients.isEmpty()){
				repository.insert(client);
			}else{
				throw new IllegalStateException("Client already exists");
			}


			
	
		};
		
	}
}