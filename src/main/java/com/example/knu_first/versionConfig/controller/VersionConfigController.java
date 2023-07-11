package com.example.knu_first.versionConfig.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersionConfigController {

    @GetMapping("/api/vercontrol/getConfigAll")
    public String showAllVersingConfig() {

        return "Hello, world!";
    }
}
