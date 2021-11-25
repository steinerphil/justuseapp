package de.justuse.backend.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("successful_orders")
public class PayPalCaptureResponseDTO extends PayPalCreateResponseDTO {
    
    private Payer payer;

    public PayPalCaptureResponseDTO(String id, String status, List<Links> links, Payer payer) {
        super(id, status, links);
        this.payer = payer;
    }
}
