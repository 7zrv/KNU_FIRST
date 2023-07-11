package com.example.knu_first.versionConfig.service;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import com.example.knu_first.versionConfig.repository.VersionConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.time.LocalDateTime;
import java.util.List;


@RequiredArgsConstructor
@Service
public class VersionConfigService {

    private final VersionConfigRepository versionConfigRepository;


    public List<VersionConfig> findAllVersionConfig(){
        return versionConfigRepository.findAll();
    }

    public VersionConfig findVersionConfigByOs(String os){
        return versionConfigRepository.findByOs(os).orElseThrow(() -> new IllegalArgumentException("not found : "+ os));
    }

    public String makeDumData(){
        VersionConfig versionConfig1 = VersionConfig.builder()
                .os("ios")
                .version("1.0")
                .updatetype(true)
                .message("This is an update message")
                .packagePath("/path/to/package1")
                .regdate(LocalDateTime.now())
                .build();

        VersionConfig versionConfig2 = VersionConfig.builder()
                .os("Android")
                .version("2.0")
                .updatetype(false)
                .message("This is another update message")
                .packagePath("/path/to/package2")
                .regdate(LocalDateTime.now())
                .build();

        // 더미 데이터 저장
        versionConfigRepository.save(versionConfig1);
        versionConfigRepository.save(versionConfig2);

        System.out.println("Dummy data loaded successfully.");

        return "success";
    }



}
