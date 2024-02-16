package com.angstore.Model;


import lombok.Data;

@Data
public class LoginForm {
    private String email;
    private String password;

    public LoginForm(){}    
}
