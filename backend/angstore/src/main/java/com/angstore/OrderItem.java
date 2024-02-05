package com.angstore;

import lombok.Data;
import lombok.EqualsAndHashCode;

// The EqualsAndHashCode annotation is disabled for the OrderItem class.
// This means that the equals and hashCode methods are not generated for this class.
// This is because the OrderItem class extends the Product class, and the equals and hashCode methods are already generated for the Product class.

@Data
@EqualsAndHashCode(callSuper=false)
public class OrderItem extends Product{
    private int quantity;
    private double price;
}
