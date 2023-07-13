package com.example.knu_first.versionConfig.repository;


import com.example.knu_first.versionConfig.entity.VersionConfig;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface VersionConfigRepository extends JpaRepository<VersionConfig, Long> {
    Optional<VersionConfig> findTopByOsOrderByVersionDesc(String os);



}
