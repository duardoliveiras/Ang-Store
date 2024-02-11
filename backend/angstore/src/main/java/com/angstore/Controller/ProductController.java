package com.angstore.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.angstore.Service.ProductService;
import com.angstore.Model.Product;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/product")
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;
    
    @GetMapping("/")
    public String getProduct(){
        return "Hello";
    }

    @PostMapping("/add")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }
    
}
