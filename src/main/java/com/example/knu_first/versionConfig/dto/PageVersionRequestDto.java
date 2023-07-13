package com.example.knu_first.versionConfig.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듦
@NoArgsConstructor
@Getter  // Setter를 사용하지 않는 이유 꼭 변경이 필요한 데이터만 사용한다.
public class PageVersionRequestDto {
    private int page; // 페이지 지정
    private int size; // 한 페이지에 나올 객체 사이즈 지정
}
