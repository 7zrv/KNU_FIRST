package com.example.knu_first.versionConfig.dto;

import com.example.knu_first.versionConfig.entity.VersionConfig;
import lombok.Getter;

import javax.persistence.Column;
import java.time.LocalDateTime;


@Getter
public class VersionConfigResponseDto {


    private final Long idx;
    private final String osName;
    private final String ver;
    private final Boolean updatetype;
    private final String message;
    private final String packagePath;
    private final LocalDateTime regdate;



    public VersionConfigResponseDto(VersionConfig versionConfig){
        this.idx = versionConfig.getId();
        this.osName = versionConfig.getOsName();
        this.ver = versionConfig.getVersion();
        this.updatetype = versionConfig.isUpdatetype();
        this.regdate = versionConfig.getRegdate();
    }

}
