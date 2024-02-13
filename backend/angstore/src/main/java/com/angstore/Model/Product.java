package com.angstore.Model;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data // This annotation is from Lombok and is used to generate the getters, setters, equals, and hashCode methods.
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private Category category;
    private String url;
}
