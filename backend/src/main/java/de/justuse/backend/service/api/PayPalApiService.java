package de.justuse.backend.service.api;

import com.paypal.http.HttpResponse;
import com.paypal.http.serializer.Json;
import com.paypal.orders.*;
import de.justuse.backend.config.PayPalClient;
import de.justuse.backend.model.OrderDTO;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalApiService {

    private final PayPalClient payPalClient;

    @Autowired
    public PayPalApiService(PayPalClient payPalClient) {
        this.payPalClient = payPalClient;
    }

    /**
     * Method to create order with complete payload
     *
     * @param debug true = print response data
     * @return HttpResponse<Order> response received from API
     * @throws IOException Exceptions from API if any
     */
    public HttpResponse<Order> createOrder(boolean debug, OrderDTO orderDTO) throws IOException {
        OrdersCreateRequest request = new OrdersCreateRequest();
        request.header("prefer", "return=representation");
        request.requestBody(buildRequestBody(orderDTO));
        HttpResponse<Order> response = payPalClient.client().execute(request);
        if (debug) {
            if (response.statusCode() == 201) {
                System.out.println("Order with Complete Payload: ");
                System.out.println("Status Code: " + response.statusCode());
                System.out.println("Status: " + response.result().status());
                System.out.println("Order ID: " + response.result().id());
                System.out.println("Intent: " + response.result().checkoutPaymentIntent());
                System.out.println("Links: ");
                for (LinkDescription link : response.result().links()) {
                    System.out.println("\t" + link.rel() + ": " + link.href() + "\tCall Type: " + link.method());
                }
                System.out.println("Total Amount: " + response.result().purchaseUnits().get(0).amountWithBreakdown().currencyCode()
                        + " " + response.result().purchaseUnits().get(0).amountWithBreakdown().value());
                System.out.println("Full response body:");
                System.out.println(new JSONObject(new Json().serialize(response.result())).toString(4));
            }
        }
        return response;

    }

    private OrderRequest buildRequestBody(OrderDTO payPalRequest ) {
        OrderRequest orderRequest = new OrderRequest();
        orderRequest.checkoutPaymentIntent("CAPTURE");

        ApplicationContext applicationContext = new ApplicationContext().brandName("justuse.de").landingPage("LOGIN").returnUrl("http://192.168.178.70:3001");
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
