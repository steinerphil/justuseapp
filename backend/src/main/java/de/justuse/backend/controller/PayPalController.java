package de.justuse.backend.controller;

import de.justuse.backend.model.OrderDTO;
import de.justuse.backend.model.PayPalCreateResponseDTO;
import de.justuse.backend.service.PayPalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
public class PayPalController {


    private final PayPalService payPalService;

    @Autowired
    public PayPalController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @PostMapping("/order")
    public PayPalCreateResponseDTO createOrder(@RequestBody OrderDTO paypalRequest) {
       return payPalService.createOrder(paypalRequest);
    }

    @PostMapping("/approve/{orderId}")
    public void approveOrder(@PathVariable String orderId){
        payPalService.captureOrder(orderId);
    }


}
