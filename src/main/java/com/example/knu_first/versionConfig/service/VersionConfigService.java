package com.example.knu_first.versionConfig.service;


import com.example.knu_first.versionConfig.dto.AddVersionRequestDto;
import com.example.knu_first.versionConfig.dto.VersionConfigUpdateRequestDto;
import com.example.knu_first.versionConfig.entity.VersionConfig;
import com.example.knu_first.versionConfig.repository.VersionConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;


@RequiredArgsConstructor
@Service
public class VersionConfigService {

    private final VersionConfigRepository versionConfigRepository;

    public VersionConfig save(AddVersionRequestDto requestDto){
        return versionConfigRepository.save(requestDto.toEntity());
    }
    public List<VersionConfig> findAllVersionConfig(){
        return versionConfigRepository.findAllByVisibleTrue();
    }

    public VersionConfig findVersionConfigByOs(String os) throws Exception{
        return versionConfigRepository.findTopByOsOrderByVersionDesc(os).orElse(null);
    }

    @Transactional
    public VersionConfig updateVersionConfig(Long idx, VersionConfigUpdateRequestDto requestDto){
        VersionConfig versionConfig = versionConfigRepository.findById(idx)
                .orElseThrow(() -> new IllegalArgumentException("version not exist! : " + idx));

        versionConfig.updateVersion(requestDto.getOs(),
                requestDto.getVersion(),
                requestDto.getUpdatetype(),
                requestDto.getMessage());

        return versionConfig;
    }



    public void deleteVersionConfig(Long idx) {
        VersionConfig versionConfig = versionConfigRepository.findByIdx(idx)
                .orElseThrow(() -> new IllegalArgumentException("failed delete! : " + idx));

        versionConfig.unVisibleVersionConfig();
    }


    public String makeDumData(){
        VersionConfig versionConfig1 = VersionConfig.builder()
                .os("ios")
                .version("2.0")
                .updatetype("true")
                .message("This is an update message")
                .packagePath("/path/to/package1")
                .build();

        VersionConfig versionConfig2 = VersionConfig.builder()
                .os("Android")
                .version("3.0")
                .updatetype("true")
                .message("This is another update message")
                .packagePath("/path/to/package2")
                .build();

        // 더미 데이터 저장
        versionConfigRepository.save(versionConfig1);
        versionConfigRepository.save(versionConfig2);

        System.out.println("Dummy data loaded successfully.");

        return "success";
    }



}
