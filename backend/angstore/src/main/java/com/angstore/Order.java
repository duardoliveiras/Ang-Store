package com.angstore;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class Order {
    private Client client;
    private List<OrderItem> items;
    private double total;
    private LocalDateTime date;
    
}
