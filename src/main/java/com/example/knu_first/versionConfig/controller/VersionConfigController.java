package com.example.knu_first.versionConfig.controller;


import com.example.knu_first.versionConfig.dto.VersionConfigResponseDto;
import com.example.knu_first.versionConfig.service.VersionConfigService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@RestController
public class VersionConfigController {

    private final VersionConfigService versionConfigService;

    @GetMapping("/api/vercontrol/getConfigAll")
    public ResponseEntity<List<VersionConfigResponseDto>> findAllVersionConfigs(){

        List<VersionConfigResponseDto> versionConfigs = versionConfigService.findAllVersionConfig()
                .stream()
                .map(VersionConfigResponseDto::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(versionConfigs);
    }

    @GetMapping("/api/vercontrol/getConfig")
    public ResponseEntity<VersionConfigResponseDto> findVersionConfigByOs(@RequestBody String os){

        VersionConfigResponseDto recentVersion = versionConfigService.findByVersionConfig(os);


        return ResponseEntity.ok().body(recentVersion);
    }

    @GetMapping("/api/makeDummyData")
    public String makeDummyData(){
        return versionConfigService.makeDumData();
    }

}
