/*package com.example.knu_first.versionConfig.dto;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class VersionListResponse {
    private final Long idx;
    private final String os;
    private final String ver;
    private final boolean updatetype;
    private final String message;
    private final LocalDateTime regdate;

    public VersionListResponse(VersionConfig versionConfig) {
        this.idx = versionConfig.getId();
        this.os = versionConfig.getOsName();
        this.ver = versionConfig.getVersion();
        this.updatetype = versionConfig.isUpdatetype();
        this.regdate = versionConfig.getRegdate();
    }
}
*/
