package de.justuse.backend.service;

import com.paypal.http.HttpResponse;
import com.paypal.orders.LinkDescription;
import com.paypal.orders.Order;
import de.justuse.backend.model.Links;
import de.justuse.backend.model.PayPalCreateResponseDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalCreateOrderMapper {

    public PayPalCreateResponseDTO mapResponse(HttpResponse<Order> payPalResponse) {
        List<Links> links = new ArrayList<>();
        for (LinkDescription linkDescription : payPalResponse.result().links()) {
            Links link = new Links(
                    linkDescription.href(),
                    linkDescription.rel(),
                    linkDescription.method()
            );
            links.add(link);
        }
        return PayPalCreateResponseDTO.builder()
                .id(payPalResponse.result().id())
                .status(payPalResponse.result().status())
                .links(links)
                .build();
    }


}
