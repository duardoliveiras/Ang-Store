package com.angstore;

import org.springframework.data.annotation.Id;

import lombok.Data;

// The EqualsAndHashCode annotation is disabled for the OrderItem class.

@Data
public class OrderItem{
    @Id
    private String id;
    private Product item;
    private int quantity;
    private double price;
}
