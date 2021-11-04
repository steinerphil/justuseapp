package de.justuse.backend.controller;

import de.justuse.backend.model.github.CodeToTokenDTO;
import de.justuse.backend.model.github.GithubConfig;
import de.justuse.backend.security.service.JwtUtilsService;
import de.justuse.backend.service.OAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("auth")
public class OAuthController {

    private final OAuthService oAuthService;
    private final JwtUtilsService jwtUtilsService;
    private final GithubConfig githubConfig;

    @Value("${de.justuse.backend.security.github.secret}")
    private String githubSecret;

    @Autowired
    public OAuthController(OAuthService oAuthService, JwtUtilsService jwtUtilsService, GithubConfig githubConfig) {
        this.oAuthService = oAuthService;
        this.jwtUtilsService = jwtUtilsService;
        this.githubConfig = githubConfig;
    }

    @PostMapping("github")
    public String loginViaGithub(@RequestBody CodeToTokenDTO githubCode) {
        CodeToTokenDTO codeToTokenDTO = new CodeToTokenDTO(
                githubConfig.getClientId(),
                githubSecret,
                githubCode.getCode());
        String githubUserName = oAuthService.getUserNameWithGithubCode(codeToTokenDTO);
        return jwtUtilsService.createToken(new HashMap<>(), githubUserName);
    }

    @GetMapping("config")
    private GithubConfig getConfig() {
        return githubConfig;
    }

}
