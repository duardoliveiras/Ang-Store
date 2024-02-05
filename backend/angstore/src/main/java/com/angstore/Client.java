package com.angstore;

import java.math.BigDecimal;
import java.util.List;

import lombok.Data;

@Data
public class Client {
    private String name;
    private Address address;
    private String email;
    private List<Product> cart;
    private BigDecimal totalSpent;
    
}
