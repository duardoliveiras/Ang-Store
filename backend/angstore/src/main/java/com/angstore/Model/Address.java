package com.angstore.Model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor // To create a constructor with all the fields of the class as arguments.
public class Address {
    private String country;
    private String postCode;
    private String city;

}