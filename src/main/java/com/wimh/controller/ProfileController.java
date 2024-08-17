package com.wimh.controller;


import com.wimh.model.UserData;
import com.wimh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    private final String uploadDir = "uploads/";

    @PostMapping("/upload-profile-image")
    public Map<String, Object> uploadProfileImage(@RequestParam("profileImage") MultipartFile file, @RequestParam("userId") Long userId) {
        Map<String, Object> response = new HashMap<>();
        try {
            if (file.isEmpty()) {
                throw new IllegalArgumentException("File is empty");
            }

            // Create upload directory if it doesn't exist
            File uploadDirFile = new File(uploadDir);
            if (!uploadDirFile.exists()) {
                uploadDirFile.mkdirs();
            }

            // Define the file path
            String fileName = file.getOriginalFilename();
            File targetFile = new File(uploadDir + fileName);

            // Save the file to the server
            file.transferTo(targetFile);

            // Save the file path to the database
            UserData user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
            user.setProfilePicturePath(uploadDir + fileName);
            userRepository.save(user);

            response.put("success", true);
            response.put("message", "Profile picture uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "File upload failed");
        } catch (IllegalArgumentException e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        return response;
    }

    @GetMapping("/user-profile")
    public UserData getUserProfile(@RequestParam("userId") Long userId) {
        return userRepository.findById(userId).orElse(null);
    }
}