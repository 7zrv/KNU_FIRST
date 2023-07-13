package com.example.knu_first.versionConfig.service;


import com.example.knu_first.versionConfig.dto.AddVersionRequestDto;
import com.example.knu_first.versionConfig.dto.OsRequestDto;
import com.example.knu_first.versionConfig.dto.VersionConfigUpdateRequestDto;
import com.example.knu_first.versionConfig.entity.VersionConfig;
import com.example.knu_first.versionConfig.repository.VersionConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
        return versionConfigRepository.findAll();
    }

    public VersionConfig findVersionConfigByOs(OsRequestDto osRequestDto) throws Exception{

        return versionConfigRepository.findTopByOsOrderByVersionDesc(osRequestDto.getOs()).orElse(null);
    }
    public String getForceUpadteVerify (OsRequestDto osRequestDto) {
        String os = osRequestDto.getOs();
        double ver = Double.parseDouble(osRequestDto.getVer());
        VersionConfig versionConfig = versionConfigRepository.findTopByOsOrderByVersionDesc(os).orElse(null);
        double minver = Double.parseDouble(versionConfig.getMinVersion());
        if(ver < minver){
            return "Force update : Yes";

        }
        else {
            return "Force update : NO";
        }
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


    @Transactional
    public void deleteVersionConfig(Long idx) {
        VersionConfig versionConfig = versionConfigRepository.findById(idx)
                .orElseThrow(() -> new IllegalArgumentException("failed delete! : " + idx));

        versionConfigRepository.delete(versionConfig);

    }

    public Page<VersionConfig> pageVersions(Pageable pageable) {
        return versionConfigRepository.findAll(pageable);
    }


    public String makeDumData() {
        for (int i = 0; i < 50; i++) {
            String version = String.format("%.1f", 1.0 + (i * 0.1));

            VersionConfig versionConfig1 = VersionConfig.builder()
                    .os("ios")
                    .version(version)
                    .updatetype("true")
                    .message("This is an update message")
                    .packagePath("/path/to/package" + (i + 1))
                    .minVersion("2.0")
                    .build();
//
            VersionConfig versionConfig2 = VersionConfig.builder()
                    .os("android")
                    .version(version)
                    .updatetype("true")
                    .message("This is an update message")
                    .packagePath("/path/to/package" + (i + 1))
                    .minVersion("2.0")
                    .build();

            versionConfigRepository.save(versionConfig1);
            versionConfigRepository.save(versionConfig2);
        }


        System.out.println("Dummy data loaded successfully.");

        return "success";
    }




}
