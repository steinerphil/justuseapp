package de.justuse.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.utils.ObjectUtils;
import de.justuse.backend.model.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
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

    public Image uploadImage(File fileToUpload) throws IOException {


        Map uploadResult = cloudinary.uploader().upload(fileToUpload, ObjectUtils.asMap(
                "eager", Arrays.asList(
                        new EagerTransformation().width(961).height(961).crop("fit")),
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret,
                "secure", true
        ));
        String url = uploadResult.get("secure_url").toString();
        String public_id = uploadResult.get("public_id").toString();
        return (new Image(public_id, url));
    }
}
