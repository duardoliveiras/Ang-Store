package com.angstore.Model;

import lombok.Data;

@Data
public class CheckoutPayment {
    private String name;
    private String currency;
    private String success = "http://localhost:4200";
    private String cancel = "http://localhost:4200";;
    private long amount;
    private long quantity;
}
