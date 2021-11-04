package de.justuse.backend.model.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GithubUserResponseDTO {

    @JsonProperty("login")
    private String username;

}
