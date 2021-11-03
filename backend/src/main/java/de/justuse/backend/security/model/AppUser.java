package de.justuse.backend.security.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Builder
@Document("users")
public class AppUser {

    @Id
    private String username;
    private String password;
}
