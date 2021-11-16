package de.justuse.backend.service;

import de.justuse.backend.exceptions.InvalidObjectException;
import de.justuse.backend.model.*;
import de.justuse.backend.repository.ImageDAO;
import de.justuse.backend.repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductDAO productRepo;
    private final CloudinaryService cloudinaryService;



    @Autowired
    public ProductService(ProductDAO productRepo, ImageDAO imageDAO, CloudinaryService cloudinaryService, CloudinaryService cloudinaryService1) {
        this.productRepo = productRepo;
        this.cloudinaryService = cloudinaryService1;
    }


    public Product addProduct(ProductDTO productDTO, Optional<Image> optionalImage) {

        try {
            checkApiObject(productDTO);
        } catch (InvalidObjectException e) {
            e.printStackTrace();
        }

        Product product = new ProductBuilder(null, productDTO.getMAX_RENTAL_CYCLE())
                .setTitle(productDTO.getTitle())
                .setDescription(productDTO.getDescription())
                .setAmount(productDTO.getAmount())
                .setPrice(productDTO.getPrice())
                .setLocation(productDTO.getLocation())
                .setImage(optionalImage.orElse(new Image("default", "https://res.cloudinary.com/dlxgg8z5j/image/upload/v1637089746/defaultImage_yvhfrd.png")))
                .setIsAvailable(productDTO.isAvailable())
                .build();
        return productRepo.save(product);
    }




    public List<Product> getProducts() {
        return productRepo.findAll();
    }



    private void checkApiObject(ProductDTO productDTO) throws InvalidObjectException {
        if (productDTO.getMAX_RENTAL_CYCLE() == 0) {
            throw new InvalidObjectException("Trying to add new product with MAX_RENTAL_CYCLE = 0. MAX_RENTAL_CYCLE can't be 0");
        }

        if (productDTO.getTitle() == null) {
            throw new InvalidObjectException("product is not valid, please check title");
        }

        if (productDTO.getDescription() == null) {
            throw new InvalidObjectException("product is not valid, please check description");
        }

        if (productDTO.getPrice() == 0) {
            throw new InvalidObjectException("product is not valid, please check price");
        }

        if (productDTO.getLocation() == null) {
            throw new InvalidObjectException("product is not valid, please check location");
        }

    }


    public void deleteProducts(DeleteProductApiDTO[] products) throws IOException {
        for (DeleteProductApiDTO product: products) {
            String productId = product.getProductId();
            String imageId = product.getImageId();

            cloudinaryService.removeImage(imageId);
            productRepo.deleteById(productId);
        }
    }

    public Product getById(String id) {
        if (productRepo.findById(id).isEmpty()){
            throw new NoSuchElementException("Product not found. Id: " + id);
        }
        return productRepo.findById(id).get();
    }
}