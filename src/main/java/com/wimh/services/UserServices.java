package com.wimh.services;

import com.wimh.model.UserData;
import com.wimh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public UserData registerUser(String name,String email,String mobileNumber,String password,String repassword){

       if(!password.equals(repassword)) return null;

        else {

            if(userRepository.findByEmail(email).isPresent()){
                System.out.println("Duplicate Login");
                return null;
            }

            UserData userData = new UserData();

            userData.setName(name);
            userData.setEmail(email);
            userData.setMobileNumber(mobileNumber);
            userData.setPassword(password);

            return userRepository.save(userData);
        }
    }

    public UserData authenticate(String email,String password){
        return userRepository.findByEmailAndPassword(email,password).orElse(null);
    }
}
