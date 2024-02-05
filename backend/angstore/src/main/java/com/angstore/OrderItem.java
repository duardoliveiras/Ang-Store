package com.angstore;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper=false)
public class OrderItem extends Product{
    private int quantity;
    private double price;
}
