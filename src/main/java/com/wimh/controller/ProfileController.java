package com.wimh.controller;

import com.wimh.model.UserData;
import com.wimh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    private final String uploadDir = "uploads/";

    @PostMapping("/upload-profile-image")
    public Map<String, Object> uploadProfileImage(@RequestParam("profileImage") MultipartFile file, @RequestParam("userEmail") String userEmail) {
        Map<String, Object> response = new HashMap<>();
        try {
            if (file.isEmpty()) {
                response.put("success", false);
                response.put("message", "File is empty");
                return response;
            }

            File uploadDirFile = new File(uploadDir);
            if (!uploadDirFile.exists()) {
                uploadDirFile.mkdirs();
            }

            String fileName = file.getOriginalFilename();
            File targetFile = new File(uploadDir + fileName);
            file.transferTo(targetFile);

            UserData user = userRepository.findByEmail(userEmail)
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
            user.setProfilePicturePath(uploadDir + fileName);
            userRepository.save(user);

            response.put("success", true);
            response.put("message", "Profile picture uploaded successfully");
        } catch (IOException e) {
            response.put("success", false);
            response.put("message", "File upload failed: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        return response;
    }
}
