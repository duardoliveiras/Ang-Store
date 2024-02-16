package com.angstore.Model;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document // This annotation is from Spring Data MongoDB and is used to indicate that this class is a document in a MongoDB database.
public class Client {
    @Id // This  is used to indicate that this field is the unique identifier for the document.
    private String id;
    private String name;
    private Address address;
    @Indexed(unique = true) // Is used to indicate that this field should be indexed in the database.
    private String email;
    private String password;
    private List<Product> cart;
    private BigDecimal totalSpent;
    
    public Client(String name, Address address, String email){
        this.name = name;
        this.address = address;
        this.email = email;
        this.totalSpent = new BigDecimal(0);
        this.cart = List.of();
    }

}
