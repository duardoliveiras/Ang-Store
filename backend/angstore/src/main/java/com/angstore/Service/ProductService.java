package com.angstore.Service;

import java.util.List;

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
    public List<Product> getAllProducts(String sort, int limit){
        List<Product> products = productRepository.findAll();
        // asc order is p1.getName().compareTo(p2.getName())
        // desc order is p2.getName().compareTo(p1.getName())
        if(sort.toLowerCase().equals("asc")){
            products.sort((p1, p2) -> p1.getName().toLowerCase().compareTo(p2.getName().toLowerCase()));
        }
        else if(sort.toLowerCase().equals("desc")){
            products.sort((p1, p2) -> p2.getName().toLowerCase().compareTo(p1.getName().toLowerCase()));    
        }
        if(limit < products.size()){
            products = products.subList(0, limit);
        }
        
        return products;
    }
}
