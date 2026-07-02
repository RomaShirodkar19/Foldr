package com.roma.foldrapi.service;


import com.roma.foldrapi.document.ProfileDocument;
import com.roma.foldrapi.dto.ProfileDTO;
import com.roma.foldrapi.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileDTO createProfile(ProfileDTO profileDTO) {

        //convert DTO to Document

        ProfileDocument profile = ProfileDocument.builder()
                .clerkId(profileDTO.getClerkId())
                .email(profileDTO.getEmail())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .credits(5)
                .createdAt(Instant.now())
                .build();
        profile=profileRepository.save(profile);

        return ProfileDTO.builder()
                .id(profile.getId())
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .credits(profile.getCredits())
                .createdAt(profile.getCreatedAt())
                .build();

    }
}
