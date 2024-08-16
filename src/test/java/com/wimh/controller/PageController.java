package com.wimh.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {


    @GetMapping("/home")
    public String home(){
        return "home";
    }

    @RequestMapping("/index")
    public String index(){
        return "index";
    }


}
