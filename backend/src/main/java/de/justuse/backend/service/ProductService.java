package de.justuse.backend.service;

import de.justuse.backend.model.Product;
import de.justuse.backend.repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductDAO productRepo;

    @Autowired
    public ProductService(ProductDAO productRepo) {
        this.productRepo = productRepo;
    }


    public Product addProduct(Product product){
      return productRepo.save(product);
    }

    public List<Product> getProducts() {
       return productRepo.findAll();
    }
}
