package de.justuse.backend.model;

import de.justuse.backend.enums.Location;

public class ProductBuilder {

    private final String id;
    private String title;
    private String description;
    private int amount;
    private boolean isAvailable = false;
    private final int MAX_RENTAL_CYCLE;
    private Location location;
    private double price;

    public ProductBuilder(String id, int MAX_RENTAL_CYCLE) {
        this.id = id;
        this.MAX_RENTAL_CYCLE = MAX_RENTAL_CYCLE;
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

    public ProductBuilder setIsAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
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

    public Product build() {
        return new Product(id, title, description, amount, isAvailable, MAX_RENTAL_CYCLE, location, price);
    }
}
