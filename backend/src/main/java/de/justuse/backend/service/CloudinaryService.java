package de.justuse.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import de.justuse.backend.model.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
public class CloudinaryService {

    @Value("${de.justuse.backend.service.cloudinary.cloudName}")
    private String cloudName;

    @Value("${de.justuse.backend.service.cloudinary.apiKey}")
    private String apiKey;

    @Value("${de.justuse.backend.service.cloudinary.apiSecret}")
    private String apiSecret;

    private final Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", cloudName,
            "api_key", apiKey,
            "api_secret", apiSecret,
            "secure", true));


//    public List<Image> uploadImage(MultipartFile fileFromJson) throws IOException {
//
//        List<Image> images = new ArrayList<>();
//        List<File> filesToUpload = new ArrayList<>();
//
//        File fileToUpload = File.createTempFile("product_photo", null);
//        fileFromJson.transferTo(fileToUpload);
//        filesToUpload.add(fileToUpload);
//
//        filesToUpload.stream().forEach(file -> {
//            Map uploadResult = null;
//            try {
//                uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            String url = uploadResult.get("url").toString();
//            String public_id = uploadResult.get("public_id").toString();
//            images.add(new Image(public_id, url));
//        });
//
//        return images;
//    }

    public Image uploadImage(File fileToUpload) throws IOException {


        Map uploadResult = cloudinary.uploader().upload(fileToUpload, ObjectUtils.asMap(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret,
                "secure", true) );
        String url = uploadResult.get("url").toString();
        String public_id = uploadResult.get("public_id").toString();
        return (new Image(public_id, url));
    }
}
