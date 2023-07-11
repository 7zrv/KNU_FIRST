package com.example.knu_first.versionConfig.dto;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class VersionListResponse {
    private final int idx;
    private final String os;
    private final String ver;
    private final boolean updatetype;
    private final String message;
    private final LocalDateTime regdate;

    public VersionListResponse(VersionConfig versionConfig) {
        this.idx = versionConfig.
        this.os = os;
        this.ver = ver;
        this.updatetype = updatetype;
        this.message = message;
        this.regdate = regdate;
    }
}
