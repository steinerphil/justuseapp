package de.justuse.backend.controller;

import de.justuse.backend.enums.Location;
import de.justuse.backend.model.Product;
import de.justuse.backend.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    @GetMapping("locations")
    public Location[] getLocations(){
        return Location.values();
    }


}
