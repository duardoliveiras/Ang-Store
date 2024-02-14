package com.angstore.Model;

import lombok.Data;

@Data
public class CheckoutPayment {
    private String name;
    private String image;
    private Long amount;
    private long quantity;
}
