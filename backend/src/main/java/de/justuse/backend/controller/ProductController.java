package de.justuse.backend.controller;

import de.justuse.backend.exceptions.BadRequestException;
import de.justuse.backend.model.Product;
import de.justuse.backend.model.ProductBuilder;
import de.justuse.backend.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Product addProductToDB(@RequestBody Product product){

        if(product.getMAX_RENTAL_CYCLE() != 0){
            Product testProduct = new ProductBuilder(product.getId(), product.getMAX_RENTAL_CYCLE())
                    .setTitle("Bike")
                    .setDescription("Mega Bike")
                    .setAmount(6)
                    .setPrice(55.99D)
                    .build();
            return productService.addProduct(testProduct);
        } else {
            log.warn("Trying to add new product with MAX_RENTAL_CYCLE = 0. MAX_RENTAL_CYCLE can't be 0");
            throw new BadRequestException();
        }
    }


}
