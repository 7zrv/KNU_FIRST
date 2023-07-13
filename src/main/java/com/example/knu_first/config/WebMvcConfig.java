package com.example.knu_first.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    // Cross-Origin Resource Sharing (CORS) 매핑을 구성하는 메서드입니다.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 엔드포인트(URL 패턴)에 대해 매핑합니다.
                .allowedOrigins("http://localhost:3000") // 해당 출처에서의 요청을 허용합니다.
                .allowedMethods("OPTIONS", "GET", "POST", "PUT" , "DELETE"); // 허용할 HTTP 메서드입니다.
    }
}
