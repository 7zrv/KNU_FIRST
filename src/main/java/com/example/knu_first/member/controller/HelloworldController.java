package com.example.knu_first.member.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloworldController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
