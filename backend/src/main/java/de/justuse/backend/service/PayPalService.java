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

    public PayPalResponseDTO createOrder(OrderDTO orderDTO) {
        //set debug to true to print response data
        try {
            HttpResponse<Order> createdOrder = payPalApiService.createOrder(false, orderDTO);
            if (createdOrder.statusCode() == 201) {
                return payPalResponseMapper.mapResponse(createdOrder);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new PayPalResponseDTO();
    }
}
