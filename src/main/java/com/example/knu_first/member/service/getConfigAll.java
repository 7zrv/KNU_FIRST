package com.example.knu_first.member.service;

import com.example.knu_first.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class getConfigAll {
    private final ConfigRepository configRepository;



    public List<Member> findAll () {
        return configRepository.findAll();
    }

    public Member findbyid () {
        return configRepository.findByid(id)
    }




}
