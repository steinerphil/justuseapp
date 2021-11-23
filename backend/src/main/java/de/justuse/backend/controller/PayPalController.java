package de.justuse.backend.controller;

import de.justuse.backend.model.OrderDTO;
import de.justuse.backend.model.PayPalResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.paypal.http.HttpResponse;
import com.paypal.orders.*;
import de.justuse.backend.config.PayPalClient;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/checkout")
public class PayPalController {


    private final PayPalClient payPalClient;

    @Autowired
    public PayPalController(PayPalClient payPalClient) {
        this.payPalClient = payPalClient;
    }


    @PostMapping(value = "/order",consumes = MediaType.APPLICATION_JSON_VALUE)
    public PayPalResponseDTO createOrder(@RequestBody OrderDTO paypalRequest) throws IOException {

        OrdersCreateRequest request = new OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody(buildRequestBody(paypalRequest));
        //3. Call PayPal to set up a transaction
        HttpResponse<Order> response = payPalClient.client().execute(request);
        PayPalResponseDTO paypalResponse = new PayPalResponseDTO();
        if (response.statusCode() == 201) {
            paypalResponse.setId(response.result().id());
        }

        return paypalResponse;
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

    private OrderRequest buildRequestBody(OrderDTO payPalRequest ) {
        OrderRequest orderRequest = new OrderRequest();
        orderRequest.checkoutPaymentIntent("CAPTURE");

        ApplicationContext applicationContext = new ApplicationContext().brandName("justuseapp").landingPage("LOGIN");
        orderRequest.applicationContext(applicationContext);

        List<PurchaseUnitRequest> purchaseUnitRequests = new ArrayList<>();
        PurchaseUnitRequest purchaseUnitRequest = new PurchaseUnitRequest().referenceId(payPalRequest.getReferenceId())
                .description(payPalRequest.getPurchaseUnits()[0].getDescription())
                .amountWithBreakdown(new AmountWithBreakdown().currencyCode("EUR").value(payPalRequest.getPurchaseUnits()[0].getAmount().getValue()));
        purchaseUnitRequests.add(purchaseUnitRequest);
        orderRequest.purchaseUnits(purchaseUnitRequests);
        return orderRequest;
    }

}
