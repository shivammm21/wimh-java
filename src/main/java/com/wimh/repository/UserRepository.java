package com.wimh.repository;

import com.wimh.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserData, Long> {

    Optional<UserData> findByMobileNumberAndOtp(String mobileNumber, String otp);

    Optional<UserData> findByMobileNumber(String mobileNumber);
}
