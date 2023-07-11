package com.example.knu_first.versionConfig.service;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import com.example.knu_first.versionConfig.repository.VersionConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class VersionConfigService {

    private VersionConfigRepository versionConfigRepository;

    public List<VersionConfig> findAllVersionConfig(){
        return versionConfigRepository.findAll();
    }

}
