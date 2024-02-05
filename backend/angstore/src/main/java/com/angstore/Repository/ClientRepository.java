package com.angstore.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
// import org.springframework.data.mongodb.repository.Query;

import com.angstore.Model.Client;



// This interface extends the MongoRepository interface, which is a part of Spring Data MongoDB.
// First argument is the type of the entity that the repository manages, and the second argument is the type of the unique identifier of the entity.
public interface ClientRepository extends MongoRepository<Client, String>{
 
    Optional<Client> findByEmail(String email);

    // @Query is used to define a custom query using MongoDB query language.
    // @Query("show dbs")
    // void test();
}
