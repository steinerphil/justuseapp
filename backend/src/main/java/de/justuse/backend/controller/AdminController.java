package de.justuse.backend.controller;

import de.justuse.backend.exceptions.InvalidObjectException;
import de.justuse.backend.model.Product;
import de.justuse.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException;

@RestController
@RequestMapping("/administration")
public class AdminController {

    private final ProductService productService;

    @Autowired
    public AdminController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/product/new")
    public Product addProductToDB(@RequestBody Product product) throws InvalidObjectException {

        if(product.getMAX_RENTAL_CYCLE() != 0){
            return productService.addProduct(product);
        } else {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR, "Trying to add new product with MAX_RENTAL_CYCLE = 0. MAX_RENTAL_CYCLE can't be 0");
        }
    }
}
