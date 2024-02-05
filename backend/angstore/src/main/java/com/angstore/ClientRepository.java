package com.angstore;

import org.springframework.data.mongodb.repository.MongoRepository;

// This interface extends the MongoRepository interface, which is a part of Spring Data MongoDB.
// First argument is the type of the entity that the repository manages, and the second argument is the type of the unique identifier of the entity.
public interface ClientRepository extends MongoRepository<Client, String>{
    
}
