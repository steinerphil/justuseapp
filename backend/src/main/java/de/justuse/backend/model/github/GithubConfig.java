package de.justuse.backend.model.github;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class GithubConfig {

    @Value("${de.justuse.backend.security.github.clientId}")
    private String clientId;

}
