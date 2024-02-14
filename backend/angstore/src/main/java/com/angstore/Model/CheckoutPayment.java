package com.angstore.Model;

import lombok.Data;

@Data
public class CheckoutPayment {
    private String name;
    private String currency;
    private String image;
    private long amount;
    private long quantity;
}
