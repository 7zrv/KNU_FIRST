package com.example.knu_first.versionConfig.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "version_config")
public class VersionConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx", nullable = false)
    private Long idx;

    @Column(name = "os", nullable = false)
    private String os;

    @Column(name = "ver")
    private String version;

    @Column(name = "updatetype")
    private boolean updatetype;


    @Column(name = "regdate")
    private LocalDateTime regdate;

    @Column(name = "message")
    private String message;

    @Column(name = "package")
    private String packagePath;



    @Builder
    public VersionConfig(String os, String version, boolean updatetype, String message, String packagePath,LocalDateTime regdate) {
        this.os = os;
        this.version = version;
        this.updatetype = updatetype;
        this.message = message;
        this.packagePath = packagePath;
        this.regdate = regdate;
    }
}
