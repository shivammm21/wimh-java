package com.wimh.controller;

import com.wimh.model.UserData;
import com.wimh.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class PageController {

    @Autowired
    private UserServices userServices;

    @GetMapping("/register")
    public String getRegisterPage(Model model) {
        model.addAttribute("registerRequest", new UserData());
        return "register_page";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model) {
        model.addAttribute("loginRequest", new UserData());
        return "login_page";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute UserData userData, @RequestParam String rePassword, Model model) {
        System.out.println("register request: " + userData);

        UserData registeredUser = userServices.registerUser(userData.getName(), userData.getEmail(), userData.getMobileNumber(), userData.getPassword(), rePassword);

        if (registeredUser == null) {
            model.addAttribute("registrationError", "Passwords do not match.");
            return "register_page";
        }

        return "redirect:/login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute UserData userData, Model model) {
        System.out.println("login request: " + userData);
        UserData authenticated = userServices.authenticate(userData.getEmail(), userData.getPassword());

        if (authenticated != null) {
            model.addAttribute("userLogin", authenticated.getName());
            return "dash_page";
        } else {
            model.addAttribute("loginError", "Invalid email or password.");
            return "login_page";
        }
    }


}
