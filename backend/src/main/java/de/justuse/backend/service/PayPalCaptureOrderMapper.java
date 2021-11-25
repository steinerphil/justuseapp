package de.justuse.backend.service;

import com.paypal.http.HttpResponse;
import com.paypal.orders.LinkDescription;
import com.paypal.orders.Order;
import de.justuse.backend.model.Links;
import de.justuse.backend.model.Name;
import de.justuse.backend.model.PayPalCaptureResponseDTO;
import de.justuse.backend.model.Payer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalCaptureOrderMapper {

    public PayPalCaptureResponseDTO mapResponse(HttpResponse<Order> payPalResponse){

        List<Links> links = new ArrayList<>();
        for (LinkDescription linkDescription : payPalResponse.result().links()) {
            Links link = new Links(
                    linkDescription.href(),
                    linkDescription.rel(),
                    linkDescription.method()
            );
            links.add(link);
        }

        Name payerName = Name.builder()
                .givenName(payPalResponse.result().payer().name().givenName())
                .surname(payPalResponse.result().payer().name().surname())
                .build();

        Payer payer = Payer.builder()
                .payerId(payPalResponse.result().payer().payerId())
                .emailAddress(payPalResponse.result().payer().email())
                .name(payerName)
                .build();


        return new PayPalCaptureResponseDTO(
                payPalResponse.result().id(),
                payPalResponse.result().status(),
                links,
                payer
        );
    }
}
