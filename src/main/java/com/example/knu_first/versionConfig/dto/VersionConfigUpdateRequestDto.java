package com.example.knu_first.versionConfig.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor

@Getter
public class VersionConfigUpdateRequestDto {

    private String os;
    private String version;
    private String updatetype;
    private String message;

}
