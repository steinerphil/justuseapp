package de.justuse.backend.service;

import de.justuse.backend.exceptions.InvalidObjectException;
import de.justuse.backend.model.Product;
import de.justuse.backend.model.ProductBuilder;
import de.justuse.backend.repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class ProductService {

    private final ProductDAO productRepo;

    @Autowired
    public ProductService(ProductDAO productRepo) {
        this.productRepo = productRepo;
    }


    public Product addProduct(Product apiProduct) throws InvalidObjectException {
        String defaultImage = "https://res.cloudinary.com/dlxgg8z5j/image/upload/v1636450556/Platzhalter_feyjl8.png";
        List<String> imageUrls;


        if (apiProduct.getTitle() == null || apiProduct.getDescription() == null || apiProduct.getPrice() == 0 || apiProduct.getLocation() == null) {
            throw new InvalidObjectException("product is not valid, please check title, description, location and price");
        }

        if(apiProduct.getImageUrls() == null){
            imageUrls = List.of(defaultImage);
        }else{
            imageUrls = apiProduct.getImageUrls();
        }

        Product product = new ProductBuilder(null, apiProduct.getMAX_RENTAL_CYCLE())
                .setTitle(apiProduct.getTitle())
                .setDescription(apiProduct.getDescription())
                .setAmount(apiProduct.getAmount())
                .setPrice(apiProduct.getPrice())
                .setLocation(apiProduct.getLocation())
                .setImageUrls(imageUrls)
                .setIsAvailable(apiProduct.isAvailable())
                .build();
        return productRepo.save(product);
    }

    public List<Product> getProducts() {
        return productRepo.findAll();
    }
}
