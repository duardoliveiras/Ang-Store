package com.angstore.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@org.springframework.context.annotation.Configuration // This annotation is used to define a class as a configuration class in Spring Boot
public class Configuration {

    @Bean // This annotation is used to define a bean in the Spring application context
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource src = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true); // This is to allow credentials (cookies, etc.)
        config.addAllowedOrigin("http://localhost:4200"); // This is to allow the Angular app to communicate with the Spring Boot app
        config.addAllowedHeader("*"); // This is to allow all headers 
        config.addAllowedMethod("*"); // This is to allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
        src.registerCorsConfiguration("/**", config); // This is to allow CORS for all paths
        
        return new CorsFilter(src);
    }
}
