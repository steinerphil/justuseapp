package de.justuse.backend.controller;

import de.justuse.backend.enums.Location;
import de.justuse.backend.exceptions.InvalidObjectException;
import de.justuse.backend.model.Product;
import de.justuse.backend.model.ProductBuilder;
import de.justuse.backend.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

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

    @PostMapping
    public Product addProductToDB(@RequestBody Product product) throws InvalidObjectException {

        if(product.getMAX_RENTAL_CYCLE() != 0){
            return productService.addProduct(product);
        } else {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR, "Trying to add new product with MAX_RENTAL_CYCLE = 0. MAX_RENTAL_CYCLE can't be 0");
        }
    }

    @GetMapping("locations")
    public Location[] getLocations(){
        return Location.values();
    }


}
