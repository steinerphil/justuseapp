package de.justuse.backend.controller;

import de.justuse.backend.model.Product;
import de.justuse.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Product addProductToDB(@RequestBody Product product){

        return productService.addProduct(product);
    }


}
