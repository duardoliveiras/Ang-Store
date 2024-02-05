package com.angstore;


import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.angstore.Model.Address;
import com.angstore.Model.Client;
import com.angstore.Repository.ClientRepository;


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
			// usingQueriesMongo(mongoTemplate, client, repository);

			// ifPresentOrElse is a method that returns a value if a value is present, and otherwise returns a default value.
			// The first argument is a Consumer that is executed if a value is present, and the second argument is a Runnable that is executed if a value is not present.
			repository.findByEmail(email).ifPresentOrElse(
				c -> {
					throw new IllegalStateException("Client already exists");
				},
				() -> {
					repository.insert(client);
				
				});
	
		};
		
	}

	public void usingQueriesMongo(MongoTemplate mongoTemplate, Client client, ClientRepository repository){
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(client.getEmail()));

		List<Client> clients = mongoTemplate.find(query, Client.class);

		if(clients.isEmpty()){
			repository.insert(client);
		}else{
			throw new IllegalStateException("Client already exists");
		}
	}

}