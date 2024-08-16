package com.wimh.services;

import com.wimh.model.UserData;
import com.wimh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;



    public UserData registerUser(String name,String email,String mobileNumber, String otp){

        if(mobileNumber == null || email == null) return null;

        else {

            if(userRepository.findByMobileNumber(mobileNumber).isPresent()){
                System.out.println("Duplicate Login");
                return null;
            }

            UserData userData = new UserData();

            userData.setName(name);
            userData.setEmail(email);
            userData.setMobileNumber(mobileNumber);
            userData.setOtp(otp);

            return userRepository.save(userData);
        }
    }

    public UserData authenticate(String mobileNumber,String otp){
        return userRepository.findByMobileNumberAndOtp(mobileNumber,otp).orElse(null);
    }
}
