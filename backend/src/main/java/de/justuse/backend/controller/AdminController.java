package de.justuse.backend.controller;

import de.justuse.backend.model.Image;
import de.justuse.backend.model.Product;
import de.justuse.backend.model.ProductDTO;
import de.justuse.backend.service.CloudinaryService;
import de.justuse.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/administration")
public class AdminController {

    private final ProductService productService;
    private final CloudinaryService cloudinaryService;

    @Autowired
    public AdminController(ProductService productService, CloudinaryService cloudinaryService) {
        this.productService = productService;
        this.cloudinaryService = cloudinaryService;
    }

    // for handcoded link in cloudinary upload
//    @PostMapping("/product/new")
//    public Product addProduct(@RequestBody ProductDTO productDTO){
//        return productService.addProduct(productDTO);
//    }

    @PostMapping("/product/new")
    public Product addProduct(@RequestPart ProductDTO productDTO, @RequestPart(value = "file") Optional<MultipartFile> uploadFile) throws IOException {
       Optional<Image> optionalImage = Optional.empty();
        if (uploadFile.isPresent()) {
            File fileToUpload = File.createTempFile("photo", null);
            uploadFile.get().transferTo(fileToUpload);
            Image image = cloudinaryService.uploadImage(fileToUpload);
            optionalImage = Optional.of(image);
        }
        return productService.addProduct(productDTO, optionalImage );
    }
}
