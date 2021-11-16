package de.justuse.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeleteProductDTO {

    @JsonProperty("productsToRemove")
    private DeleteProductApiDTO[] data;
}
