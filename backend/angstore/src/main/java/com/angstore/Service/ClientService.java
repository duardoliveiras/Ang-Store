package com.angstore.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.angstore.Configuration.SecretKeyGen;
import com.angstore.Model.Client;
import com.angstore.Model.LoginForm;
import com.angstore.Repository.ClientRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ClientService implements UserDetailsService{

    private final int JWT_TOKEN_VALIDITY = 5 * 60 * 60;
    private final String SECRET = SecretKeyGen.generateNewSecretKey();
    
    private final ClientRepository clientRepository;
    
    @Autowired // This annotation is used to inject the dependency of the ClientRepository class into this class.
    BCryptPasswordEncoder encoder;

    public List<Client> fetchAllClients(){
        return clientRepository.findAll();
    }
    public void postClient(Client client){
        clientRepository.insert(client);
    }
    public String valideClient(LoginForm login){
        UserDetails client = loadUserByUsername(login.getEmail());
        if(client != null){
            if(encoder.matches(login.getPassword(), client.getPassword())){
                return Jwts.builder()
                    .setSubject(client.getUsername())
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                    .signWith(SignatureAlgorithm.HS512, SECRET)
                    .compact();     
            }
        }
        return null;
    }
    // Optional is a container object that may or may not contain a non-null value.
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Client> client = clientRepository.findByEmail(email);
        if(!client.isPresent()){
            throw new UsernameNotFoundException("Client not found");
        }
        return client.get();
    }
}
