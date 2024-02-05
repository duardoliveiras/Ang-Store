package com.angstore;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private Category category;
    private String url;
}
