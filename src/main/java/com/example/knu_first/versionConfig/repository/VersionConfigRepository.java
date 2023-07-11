package com.example.knu_first.versionConfig.repository;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface VersionConfigRepository extends JpaRepository<VersionConfig, Long> {

}
