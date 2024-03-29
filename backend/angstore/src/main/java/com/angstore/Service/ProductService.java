package com.angstore.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.angstore.Repository.ProductRepository;
import com.angstore.Model.Category;
import com.angstore.Model.Product;

import lombok.AllArgsConstructor;




@Service
@AllArgsConstructor // Lombok annotation to create a constructor with all the required fields (final fields)
public class ProductService {

    // static method to get all categories from the enum
    public static Category[] getAllCategories(){
        return Category.values();
    }
    
    private final ProductRepository productRepository;

    // method to add a product
    public void addProduct(Product product){
        productRepository.save(product);
    }

    // method to get all products
    public List<Product> getAllProducts(String sort, int limit){
        List<Product> products = productRepository.findAll();

        products = this.orderByList(products, sort, limit);
        
        return products;
    }

    // method to get all categories
    public Category[] getCat(){
        return ProductService.getAllCategories();
    }

    // method to get products by category
    public List<Product> getProductsByCategory(String category, String sort, int limit){
        List<Product> products = productRepository.findByCategory(category).orElse(null);
        products = this.orderByList(products, sort, limit);
        return products;
    }
    
    public List<Product> orderByList(List<Product> products, String sort, int limit){
        // asc order is p1.getName().compareTo(p2.getName())
        // desc order is p2.getName().compareTo(p1.getName())
        if(sort.toLowerCase().equals("asc")){
            products.sort((p1, p2) -> p1.getName().toLowerCase().compareTo(p2.getName().toLowerCase()));
        }else if(sort.toLowerCase().equals("desc")){
            products.sort((p1,p2) -> p2.getName().toLowerCase().compareTo(p1.getName().toLowerCase()));
        }

        if(limit < products.size()){
            products.subList(0, limit);
        }
        return products;
    }
}
