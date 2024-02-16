package com.angstore.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.angstore.Model.Client;
import com.angstore.Model.LoginForm;
import com.angstore.Repository.ClientRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ClientService {
    
    private final ClientRepository clientRepository;
    
    @Autowired // This annotation is used to inject the dependency of the ClientRepository class into this class.
    BCryptPasswordEncoder encoder;

    public List<Client> fetchAllClients(){
        return clientRepository.findAll();
    }
    public void postClient(Client client){
        clientRepository.insert(client);
    }
    public boolean valideClient(LoginForm login){
        Optional<Client> client = clientRepository.findByEmail(login.getEmail());
        if(client.isPresent()){
            if(encoder.matches(login.getPassword(), client.get().getPassword())){
                return true;
            }
        }
        return false;
    }
}
