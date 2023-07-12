package com.example.knu_first.versionConfig.controller;


import com.example.knu_first.versionConfig.dto.AddVersionRequestDto;
import com.example.knu_first.versionConfig.dto.OsRequestDto;
import com.example.knu_first.versionConfig.dto.VersionConfigResponseDto;
import com.example.knu_first.versionConfig.dto.VersionConfigUpdateRequestDto;
import com.example.knu_first.versionConfig.entity.VersionConfig;
import com.example.knu_first.versionConfig.service.VersionConfigService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@RestController
public class VersionConfigController {

    private final VersionConfigService versionConfigService;
    @PostMapping("/api/vercontrol/add")
    public ResponseEntity<VersionConfig> addVersionConfig(@RequestBody AddVersionRequestDto requestDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(versionConfigService.save(requestDto));
    }
    @GetMapping("/api/vercontrol/getConfigAll")
    public ResponseEntity<List<VersionConfigResponseDto>> findAllVersionConfigs(){

        List<VersionConfigResponseDto> versionConfigs = versionConfigService.findAllVersionConfig()
                .stream()
                .map(VersionConfigResponseDto::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(versionConfigs);
    }

    @PostMapping("/api/vercontrol/getConfig")
    public ResponseEntity<VersionConfigResponseDto> findVersionConfigByOs(@RequestBody OsRequestDto osRequestDto) throws Exception {
        return ResponseEntity.ok().body(new VersionConfigResponseDto(versionConfigService.findVersionConfigByOs(osRequestDto.getOs())));
    }


    @PutMapping("/api/vercontrol/update/{idx}")
    public ResponseEntity<VersionConfig> updateVersionConfig(@PathVariable Long idx,
                                                       @RequestBody VersionConfigUpdateRequestDto requestDto){

        VersionConfig updatedVersionConfig = versionConfigService.updateVersionConfig(idx, requestDto);

        return ResponseEntity.ok().body(updatedVersionConfig);

    }

    @DeleteMapping("/api/vercontrol/delete/{idx}")
    public String DeleteVersionConfig(@PathVariable Long idx){

        versionConfigService.deleteVersionConfig(idx);

        return "Delete Complete";
    }

    @GetMapping("/api/makeDummyData")
    public String makeDummyData(){
        return versionConfigService.makeDumData();
    }

}
