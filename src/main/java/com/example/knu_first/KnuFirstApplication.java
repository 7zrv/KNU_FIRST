package com.example.knu_first;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//
@EnableJpaAuditing //등록시각, 수정시각을 위한 전체 auditing 활성화를 위한 에노테이션
@SpringBootApplication
public class KnuFirstApplication {
	public static void main(String[] args) {
		SpringApplication.run(KnuFirstApplication.class, args);

	}
}
