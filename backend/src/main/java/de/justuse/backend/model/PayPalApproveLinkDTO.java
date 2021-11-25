package de.justuse.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PayPalApproveLinkDTO {

    private String approveUrl;
    private String orderId;

}
