package com.wimh.controller;

import com.wimh.model.UserData;
import com.wimh.services.UserServices;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@Controller
public class PageController {

    private final UserServices userServices;

    // Constructor
    public PageController(UserServices userServices) {
        this.userServices = userServices;
    }

    // Generates a random OTP
    private int generateOTP() {
        Random random = new Random();
        return 1000 + random.nextInt(9000);
    }

    // Endpoint to get the registration page
    @GetMapping("/register")
    public String getRegisterPage(Model model) {
        model.addAttribute("registerRequest", new UserData());
        return "register_page";
    }

    // Endpoint to handle user registration and send OTP
    @PostMapping("/register")
    public String register(@ModelAttribute UserData userData, Model model) {
        int otp = generateOTP();
        userData.setOtp(String.valueOf(otp));
        System.out.println("Register request: " + userData);

        // Save user data to the database
        UserData savedUser = userServices.registerUser(userData.getName(), userData.getEmail(), userData.getMobileNumber(), userData.getOtp());

        // Send OTP via email or SMS
        boolean isOTPSent = sendOTPToUser(userData.getEmail(), otp);

        if (!isOTPSent || savedUser == null) {
            model.addAttribute("error", "Failed to send OTP or save user data.");
            return "error_page";
        }

        return "redirect:/login";
    }

    // Endpoint to handle user login
    @PostMapping("/login")
    public String login(@ModelAttribute UserData userData, Model model) {
        System.out.println("Login request: " + userData);
        UserData authenticated = userServices.authenticate(userData.getMobileNumber(), userData.getOtp());

        if (authenticated != null) {
            model.addAttribute("userLogin", authenticated.getName());
            return "dash_page";
        } else {
            return "error_page";
        }
    }

    // Private method to send OTP to the user
    private boolean sendOTPToUser(String email, int otp) {
        // Implement email/SMS sending logic here
        return true; // Return true if OTP was sent successfully, otherwise false
    }
}
