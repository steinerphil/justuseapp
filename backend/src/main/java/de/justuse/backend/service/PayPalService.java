package de.justuse.backend.service;

import com.paypal.http.HttpResponse;
import com.paypal.orders.Order;
import de.justuse.backend.model.OrderDTO;
import de.justuse.backend.model.PayPalCaptureResponseDTO;
import de.justuse.backend.model.PayPalCreateResponseDTO;
import de.justuse.backend.repository.OrderDAO;
import de.justuse.backend.service.api.PayPalApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class PayPalService {

    private final PayPalApiService payPalApiService;
    private final PayPalCreateOrderMapper createOrderMapper;
    private final PayPalCaptureOrderMapper captureOrderMapper;
    private final OrderDAO successfulOrderRepo;

    @Autowired
    public PayPalService(PayPalApiService payPalApiService, PayPalCreateOrderMapper payPalCreateOrderMapper, PayPalCaptureOrderMapper captureOrderMapper, OrderDAO successfulOrderRepo) {
        this.payPalApiService = payPalApiService;
        this.createOrderMapper = payPalCreateOrderMapper;
        this.captureOrderMapper = captureOrderMapper;
        this.successfulOrderRepo = successfulOrderRepo;
    }

    public PayPalCreateResponseDTO createOrder(OrderDTO orderDTO) {
        //set debug to true to print response data
        try {
            HttpResponse<Order> createdOrder = payPalApiService.createOrder(false, orderDTO);
            if (createdOrder.statusCode() == 201) {
                return createOrderMapper.mapResponse(createdOrder);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new PayPalCreateResponseDTO();
    }

    public PayPalCaptureResponseDTO captureOrder(String orderId){
        try {
            HttpResponse<Order> captureOrder = payPalApiService.captureOrder(true, orderId);
            if (captureOrder.statusCode() == 201) {
                PayPalCaptureResponseDTO successfulOrder = captureOrderMapper.mapResponse(captureOrder);
               return successfulOrderRepo.save(successfulOrder);
//                return successfulOrder;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new PayPalCaptureResponseDTO();
    }
}
