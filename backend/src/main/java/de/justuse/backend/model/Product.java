package de.justuse.backend.model;

import de.justuse.backend.enums.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@Document("products")
public class Product {

    private final String id;
    private String title;
    private String description;
    private int amount;
    private boolean isAvailable;
    private final int MAX_RENTAL_CYCLE;
    private Location location;
    private double price;
    private List<String> imageUrls;

}
