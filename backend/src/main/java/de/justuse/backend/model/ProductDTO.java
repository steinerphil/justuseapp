package de.justuse.backend.model;

import de.justuse.backend.enums.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@Data
@AllArgsConstructor
public class ProductDTO {

    private String title;
    private String description;
    private int amount;
    private boolean isAvailable;
    private final int MAX_RENTAL_CYCLE;
    private Location location;
    private double price;


}

