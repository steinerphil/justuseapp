package de.justuse.backend.service;

import com.paypal.http.HttpResponse;
import com.paypal.orders.Order;
import de.justuse.backend.model.OrderDTO;
import de.justuse.backend.model.PayPalResponseDTO;
import de.justuse.backend.service.api.PayPalApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class PayPalService {

    private final PayPalApiService payPalApiService;
    private final PayPalResponseMapper payPalResponseMapper;

    @Autowired
    public PayPalService(PayPalApiService payPalApiService, PayPalResponseMapper payPalResponseMapper) {
        this.payPalApiService = payPalApiService;
        this.payPalResponseMapper = payPalResponseMapper;
    }

    public PayPalResponseDTO createOrder(OrderDTO orderDTO) throws IOException {
        //set debug to true to print response data
        HttpResponse<Order> createdOrder = payPalApiService.createOrder(false, orderDTO);
        return payPalResponseMapper.mapResponse(createdOrder);
    }
}
