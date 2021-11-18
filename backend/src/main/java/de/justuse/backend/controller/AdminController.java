package de.justuse.backend.controller;

import de.justuse.backend.model.*;
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

    @PostMapping("/product/new")
    public Product addProduct(@RequestPart ProductDTO productDTO, @RequestPart(value = "file") Optional<MultipartFile> uploadFile) throws IOException {
        Optional<Image> optionalImage = Optional.empty();
        if (uploadFile.isPresent()) {
            File fileToUpload = File.createTempFile("photo", null);
            uploadFile.get().transferTo(fileToUpload);
            Image image = cloudinaryService.uploadImage(fileToUpload);
            optionalImage = Optional.of(image);
        }
        return productService.addProduct(productDTO, optionalImage);
    }

    @DeleteMapping("product/delete")
    public void deleteProducts(@RequestBody DeleteProductDTO requestBody) throws IOException {
        DeleteProductApiDTO[] productsToRemove = requestBody.getData();
        productService.deleteProducts(productsToRemove);
    }

    @PostMapping("/product/edit/{id}")
    public Product editProduct(@PathVariable String id, @RequestPart Product product, @RequestPart(value = "file") Optional<MultipartFile> uploadFile) throws IOException {
        Optional<Image> optionalImage = Optional.empty();
        if (uploadFile.isPresent()) {
            File fileToUpload = File.createTempFile("photo", null);
            uploadFile.get().transferTo(fileToUpload);
            Image image = cloudinaryService.uploadImage(fileToUpload);
            optionalImage = Optional.of(image);
        }
        return productService.editProduct(id, product, optionalImage);
    }
}
