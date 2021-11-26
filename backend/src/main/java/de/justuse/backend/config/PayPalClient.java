package de.justuse.backend.config;

import com.paypal.core.PayPalEnvironment;
import com.paypal.core.PayPalHttpClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PayPalClient {

    @Value("${de.justuse.backend.paypal.clientid}")
    private String clientId = "AZGV7ZChKfhMF6KYPg0zsZC_NakicLcxi2Nzh1G3Rw0lqdO0_2oPld2QPXKw0VgLfa44-8Tgd6rUDMKw";
    @Value("${de.justuse.backend.paypal.application.secret}")
    private String clientSecret = "EGTmUCIdFbDh6tOpeqck4ET6-oj7NvO2JQYTHbmTCSoU2S3icCjomPSQjrGAM0pA6xLDCzRR3uRLoqge";

    /**
     *Set up the PayPal Java SDK environment with PayPal access credentials.
     *This sample uses SandboxEnvironment. In production, use LiveEnvironment.
     */
    private PayPalEnvironment environment = new PayPalEnvironment.Sandbox(
            clientId,
            clientSecret);

    /**
     *PayPal HTTP client instance with environment that has access
     *credentials context. Use to invoke PayPal APIs.
     */
    PayPalHttpClient client = new PayPalHttpClient(environment);

    /**
     *Method to get client object
     *
     *@return PayPalHttpClient client
     */
    public PayPalHttpClient client() {
        return this.client;
    }
}
