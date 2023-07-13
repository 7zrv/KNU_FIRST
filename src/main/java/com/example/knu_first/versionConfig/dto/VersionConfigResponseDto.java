package com.example.knu_first.versionConfig.dto;

import com.example.knu_first.versionConfig.entity.VersionConfig;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


import java.time.LocalDateTime;

@Getter
public class VersionConfigResponseDto {
    private final Long idx;
    private final String os;
    private final String ver;
    private final String updatetype;
    private final String message;
    private final String packagePath;
    private final LocalDateTime regdate;



    public VersionConfigResponseDto(VersionConfig versionConfig){
        this.idx = versionConfig.getIdx();
        this.os = versionConfig.getOs();
        this.ver = versionConfig.getVersion();
        this.updatetype = versionConfig.getUpdatetype();
        this.message = versionConfig.getMessage();
        this.packagePath = versionConfig.getPackagePath();
        this.regdate = versionConfig.getRegdate();
    }



}
