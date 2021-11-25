package de.justuse.backend.model;

import lombok.*;

import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayPalCaptureResponseDTO extends PayPalCreateResponseDTO {
    
    private Payer payer;

    public PayPalCaptureResponseDTO(String id, String status, List<Links> links, Payer payer) {
        super(id, status, links);
        this.payer = payer;
    }
}
