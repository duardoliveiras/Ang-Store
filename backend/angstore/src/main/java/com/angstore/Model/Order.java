package com.angstore;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Order {
    @Id
    private String id;
    private String clientId;
    private Address shippingAddress;
    private List<OrderItem> items;
    private double total;
    private LocalDateTime date;
    
}
