package de.justuse.backend.model;

import de.justuse.backend.enums.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private String title;
    private String description;
    private int amount;
    private boolean isAvailable;
    private int MAX_RENTAL_CYCLE;
    private Location location;
    private double price;


}

