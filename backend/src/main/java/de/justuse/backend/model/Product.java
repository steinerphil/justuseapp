package de.justuse.backend.model;

import de.justuse.backend.enums.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

@Data
@AllArgsConstructor
@Document("products")
public class Product {

    @Id
    private final String id;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @NonNull
    private int amount;

    @NonNull
    private boolean available;

    @NonNull
    private int maxRentalCycle;

    @NonNull
    private Location location;

    @NonNull
    private double price;

    private Image image;

}
