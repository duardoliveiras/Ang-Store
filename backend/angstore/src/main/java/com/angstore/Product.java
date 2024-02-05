package com.angstore;

import lombok.Data;

@Data
public class Product {
    private String name;
    private String description;
    private double price;
    private Category category;
    private String url;
}
