package de.justuse.backend.service;

import de.justuse.backend.exceptions.InvalidObjectException;
import de.justuse.backend.model.Image;
import de.justuse.backend.model.Product;
import de.justuse.backend.model.ProductBuilder;
import de.justuse.backend.model.ProductDTO;
import de.justuse.backend.repository.ImageDAO;
import de.justuse.backend.repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductDAO productRepo;



    @Autowired
    public ProductService(ProductDAO productRepo, ImageDAO imageDAO, CloudinaryService cloudinaryService) {
        this.productRepo = productRepo;
    }


    public Product addProduct(ProductDTO productDTO, Optional<Image> optionalImage) {

        try {
            checkApiObject(productDTO);
        } catch (InvalidObjectException e) {
            e.printStackTrace();
        }

//        if (productDTO.getFile() == null) {
//            imagesToSave = new Image("default", "https://res.cloudinary.com/dlxgg8z5j/image/upload/c_scale,h_961,w_961/v1636450556/Platzhalter_feyjl8.png");
//        } else {
//            imagesToSave = uploadFiles(productDTO.getFile());
//        }

        Product product = new ProductBuilder(null, productDTO.getMAX_RENTAL_CYCLE())
                .setTitle(productDTO.getTitle())
                .setDescription(productDTO.getDescription())
                .setAmount(productDTO.getAmount())
                .setPrice(productDTO.getPrice())
                .setLocation(productDTO.getLocation())
                .setImage(optionalImage.orElse(null))
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


}