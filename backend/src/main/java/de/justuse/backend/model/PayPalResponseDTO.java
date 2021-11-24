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
public class PayPalResponseDTO {

    private String id;
    private String status;
    private List<Links> links;

    //TODO Links Array in Response DTO hinzufügen
    //TODO Authorization Header in Post Request
    /*
     * {"name":"AUTHENTICATION_FAILURE",
     * "message":"Authentication failed due to invalid authentication credentials or a missing Authorization header.",
     * "links":[{"href":"https://developer.paypal.com/docs/api/overview/#error",
     * "rel":"information_link"}]}
     */
}
