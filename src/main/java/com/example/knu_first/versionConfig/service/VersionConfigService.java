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
    public
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
        for (int i = 0; i < 100; i++) {
            VersionConfig versionConfig = VersionConfig.builder()
                    .os("ios")
                    .version("2.0")
                    .updatetype("true")
                    .message("This is an update message")
                    .packagePath("/path/to/package" + (i + 1))
                    .build();

            versionConfigRepository.save(versionConfig);
        }

        System.out.println("Dummy data loaded successfully.");

        return "success";
    }




}
