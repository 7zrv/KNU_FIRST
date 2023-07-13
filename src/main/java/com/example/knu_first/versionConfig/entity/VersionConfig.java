package com.example.knu_first.versionConfig.entity;


import lombok.*;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@EntityListeners(AuditingEntityListener.class)
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
    private String updatetype;

    @Column(name = "message")
    private String message;

    @Column(name = "package")
    private String packagePath;

    @LastModifiedDate
    @Column(name = "regdate")
    private LocalDateTime regdate;


    @Builder
    public VersionConfig(String os, String version, String updatetype, String message, String packagePath) {
        this.os = os;
        this.version = version;
        this.updatetype = updatetype;
        this.message = message;
        this.packagePath = packagePath;
    }

    public void updateVersion(String os, String version, String updatetype, String message){
        this.os = os;
        this.version = version;
        this.updatetype = updatetype;
        this.message = message;
    }
}
