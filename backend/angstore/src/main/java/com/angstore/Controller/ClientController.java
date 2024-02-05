package com.angstore.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angstore.Model.Client;
import com.angstore.Service.ClientService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/client")
@AllArgsConstructor
public class ClientController{

    private final ClientService clientService;

    @GetMapping()
    public String getClient(){
        return "Hello";
    }
    @GetMapping("/all")
    public List<Client> fetchAllClients(){
        return clientService.fetchAllClients();
    }




}