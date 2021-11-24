package de.justuse.backend.controller;

import com.paypal.orders.Order;
import de.justuse.backend.model.OrderDTO;
import de.justuse.backend.model.PayPalResponseDTO;
import de.justuse.backend.service.PayPalService;
import de.justuse.backend.service.api.PayPalApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/checkout")
public class PayPalController {


    private final PayPalService payPalService;

    @Autowired
    public PayPalController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @PostMapping("/order")
    public PayPalResponseDTO createOrder(@RequestBody OrderDTO paypalRequest) throws IOException {

       return payPalService.createOrder(paypalRequest);
    }


//    @PostMapping("/api/v1/approve")
//    public PaypalResponse approveOrder(@RequestBody PaypalRequest paypalRequest) throws IOException {
//        PaypalResponse res = new PaypalResponse();
//        OrdersGetRequest request = new OrdersGetRequest(paypalRequest.getOrderId());
//
//        //3. Call PayPal to get the transaction
//        HttpResponse<Order> response = paypalClient.client().execute(request);
//        //4. Save the transaction in your database. Implement logic to save transaction to your database for future reference.
//        if(response.statusCode() == HttpStatus.SC_OK){
//            response = paypalService.captureOrder(paypalRequest, true);
//            if(response.statusCode() == HttpStatus.SC_CREATED) {
//                //System.out.println(new JSONObject(new Json().serialize(response.result())).toString(4));
//                res.setOrderID(response.result().id());
//            }
//            return res;
//        }else {
//            return res;
//        }
//    }


}
