package de.justuse.backend.service.api;

import de.justuse.backend.model.github.CodeToTokenDTO;
import de.justuse.backend.model.github.GithubApiResponse;
import de.justuse.backend.model.github.GithubUserResponseDTO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
public class GithubApiService {

    static final String API_URL = "https://github.com/login/oauth/access_token";
    private final RestTemplate restTemplate = new RestTemplate();

    public GithubApiResponse getGithubAccessToken(CodeToTokenDTO codeToTokenDTO){
        ResponseEntity<GithubApiResponse> response = restTemplate
                .postForEntity(API_URL, codeToTokenDTO, GithubApiResponse.class);
        return response.getBody();
    }

    public String getUserNameWithAccessToken(String accessToken){
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        ResponseEntity<GithubUserResponseDTO> response = restTemplate
                .exchange("https://api.github.com/user", HttpMethod.GET, new HttpEntity<>(headers), GithubUserResponseDTO.class);
        return Objects.requireNonNull(response.getBody()).getUsername();
    }

}
