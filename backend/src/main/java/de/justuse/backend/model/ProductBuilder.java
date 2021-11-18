package de.justuse.backend.model;

import de.justuse.backend.enums.Location;

public class ProductBuilder {

    private final String id;
    private String title;
    private String description;
    private int amount;
    private boolean available = false;
    private int maxRentalCycle;
    private Location location;
    private double price;
    private Image image;


    public ProductBuilder(String id) {
        this.id = id;
    }

    public ProductBuilder setTitle(String title) {
        this.title = title;
        return this;
    }

    public ProductBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public ProductBuilder setAmount(int amount) {
        this.amount = amount;
        return this;
    }

    public ProductBuilder setAvailable(boolean available) {
        this.available = available;
        return this;
    }

    public ProductBuilder setLocation(Location location) {
        this.location = location;
        return this;
    }

    public ProductBuilder setPrice(double price) {
        this.price = price;
        return this;
    }

    public ProductBuilder setMaxRentalCycle(int maxRentalCycle){
        this.maxRentalCycle = maxRentalCycle;
        return this;
    }

    public ProductBuilder setImage(Image image) {
        this.image = image;
        return this;
    }

    public Product build() {
        return new Product(id, title, description, amount, available, maxRentalCycle, location, price, image);
    }
}
