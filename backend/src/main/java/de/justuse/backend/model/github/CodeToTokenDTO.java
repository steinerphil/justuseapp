package de.justuse.backend.model.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CodeToTokenDTO {
    @JsonProperty("client_id")
    private final String client_id;
    @JsonProperty("client_secret")
    private final String client_secret;
    @JsonProperty
    private final String code;
}

//TODO change field names after test
