package com.angstore.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.angstore.Model.Product;

public interface ProductRepository extends MongoRepository<Product, String>{

    
    
}
