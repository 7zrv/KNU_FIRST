package com.example.knu_first.versionConfig.dto;

import com.example.knu_first.versionConfig.entity.VersionConfig;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듦
@NoArgsConstructor
@Getter  // Setter를 사용하지 않는 이유 꼭 변경이 필요한 데이터만 사용한다.
public class AddVersionRequestDto {
    private String os;
    private String ver;
    private String updatetype;
    private String message;
    private String packagePath;
    private String minVersion;

    public VersionConfig toEntity() { // 데이터 베이스 형식으로 변화를 일으킴, 데이터가 의도적으로 변화되는것을 방지
        return VersionConfig.builder()
                .os(os)
                .version(ver)
                .updatetype(updatetype)
                .message(message)
                .packagePath(packagePath)
                .minVersion(minVersion)
                .build();
    }


}
