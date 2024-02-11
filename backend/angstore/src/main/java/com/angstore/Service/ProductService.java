package com.angstore.Service;

import org.springframework.stereotype.Service;

import com.angstore.Repository.ProductRepository;
import com.angstore.Model.Product;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor // Lombok annotation to create a constructor with all the required fields (final fields)
public class ProductService {
    
    private final ProductRepository productRepository;

    public void addProduct(Product product){
        productRepository.save(product);
    }
}
