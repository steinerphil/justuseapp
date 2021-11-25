package de.justuse.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PayPalCreateResponseDTO {

    private String id;
    private String status;
    private List<Links> links;
}
