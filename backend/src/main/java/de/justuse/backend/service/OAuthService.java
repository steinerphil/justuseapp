package de.justuse.backend.service;

import de.justuse.backend.model.github.CodeToTokenDTO;
import de.justuse.backend.model.github.GithubApiResponse;
import de.justuse.backend.service.api.GithubApiService;
import org.springframework.stereotype.Service;

@Service
public class OAuthService {

    private final GithubApiService githubApiService;

    public OAuthService(GithubApiService githubApiService) {
        this.githubApiService = githubApiService;
    }

    private String getGithubAccessToken(CodeToTokenDTO codeToTokenDTO){
        GithubApiResponse githubApiResponse = githubApiService.getGithubAccessToken(codeToTokenDTO);
        return githubApiResponse.getAccessToken();
    }

    public String getUserNameWithGithubCode(CodeToTokenDTO codeToTokenDTO){
        String accessToken = getGithubAccessToken(codeToTokenDTO);
        return githubApiService.getUserNameWithAccessToken(accessToken);
    }

}
