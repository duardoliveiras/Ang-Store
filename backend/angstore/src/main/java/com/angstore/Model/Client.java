package com.angstore.Model;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;

@Data // This annotation is from Lombok and is used to generate getters and setters for the fields in this class.
@Document // This annotation is from Spring Data MongoDB and is used to indicate that this class is a document in a MongoDB database.
public class Client implements UserDetails{
    @Id // This  is used to indicate that this field is the unique identifier for the document.
    private String id;
    private String name;
    //private Address address;
    @Indexed(unique = true) // Is used to indicate that this field should be indexed in the database.
    private String email;
    private String password;
    private List<Product> cart;
    private BigDecimal totalSpent;
    
    public Client(){
        this.totalSpent = new BigDecimal(0);
        this.cart = List.of();
    }

    public Client(String name, Address address, String email){
        this.name = name;
        //this.address = address;
        this.email = email;
        this.totalSpent = new BigDecimal(0);
        this.cart = List.of();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return null;
    }

    @Override
    public String getPassword(){
        return this.password;
    }
    @Override
    public String getUsername(){
        return this.email;
    }
    @Override
    public boolean isAccountNonExpired(){
        return true;
    }
    @Override
    public boolean isAccountNonLocked(){
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }
    @Override
    public boolean isEnabled(){
        return true;
    }
    

}
