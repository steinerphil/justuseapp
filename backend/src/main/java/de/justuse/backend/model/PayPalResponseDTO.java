package de.justuse.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PayPalResponseDTO {

    private String id;
    private String status;

    //TODO Links Array in Response DTO hinzufügen
    //TODO Authorization Header in Post Request
    /*
     * {"name":"AUTHENTICATION_FAILURE",
     * "message":"Authentication failed due to invalid authentication credentials or a missing Authorization header.",
     * "links":[{"href":"https://developer.paypal.com/docs/api/overview/#error",
     * "rel":"information_link"}]}
     */
}
