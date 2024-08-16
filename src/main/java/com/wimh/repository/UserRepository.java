package com.wimh.repository;

import com.wimh.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserData, Long> {

    Optional<UserData> findByEmailAndPassword(String email, String password);

    Optional<UserData> findByEmail(String email);
}
