package com.angstore.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.angstore.Model.Client;

import com.angstore.Repository.ClientRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ClientService {
    
    private final ClientRepository clientRepository; 

    public List<Client> fetchAllClients(){
        return clientRepository.findAll();
    }
}
