package com.angstore.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angstore.Model.Client;
import com.angstore.Model.LoginForm;
import com.angstore.Service.ClientService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/client")
@AllArgsConstructor
public class ClientController{

    
    private final ClientService clientService;
    @Autowired
    BCryptPasswordEncoder encoder;

    @GetMapping("")
    public String getClient(){
        return "Hello";
    }
    @GetMapping("/all")
    public List<Client> fetchAllClients(){
        return clientService.fetchAllClients();
    }
    @PostMapping("")
    public void postClient(@RequestBody Client client){
        client.setPassword(encoder.encode(client.getPassword()));
        clientService.postClient(client);
    }
    @PostMapping("/login")
    public String valideClient(@RequestBody LoginForm login){
       String token = clientService.valideClient(login);
       if(token == null){
            return "Invalid credentials";
       }
       return token;
    }  



}