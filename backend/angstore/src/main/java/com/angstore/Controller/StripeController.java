package com.angstore.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angstore.Model.CheckoutPayment;
import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.model.checkout.Session;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/stripe")
@AllArgsConstructor
public class StripeController {
    
    private static Gson gson = new Gson();

    @PostMapping("/payment")
    public String paymentCheckoutPage(@RequestBody List<CheckoutPayment> payments) throws StripeException{
        init();
		String currency = "usd";
		String success = "http://localhost:4200";
		String cancel = "http://localhost:4200";

        // Create a new Checkout Session for the order
		SessionCreateParams.Builder builder = SessionCreateParams.builder()
				.setSuccessUrl(success)
				.setCancelUrl(cancel)
				.setMode(SessionCreateParams.Mode.PAYMENT)
				.addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD);

		for (CheckoutPayment p : payments) {
			builder.addLineItem(
				SessionCreateParams.LineItem.builder()
					.setQuantity(p.getQuantity())
					.setPriceData(
						SessionCreateParams.LineItem.PriceData.builder()
							.setCurrency(currency).setUnitAmount(p.getAmount())
							.setProductData(SessionCreateParams.LineItem.PriceData.ProductData
							.builder().setName(p.getName())
							.addImage(p.getImage())
							.build())
						.build())
					.build());
		}


				  
		SessionCreateParams params = builder.build();
				
        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());

        return gson.toJson(responseData);
    }

    private static void init(){
        Stripe.apiKey = "sk_test_51OjP0cBGVQWFzAE7E4npyiuQebO60GpRw98ZKvUuNi2F5e1p2ZVxQoA4fsT9g8G7oCskC5fasZdZ2iQFMp58xPlm00JCi4lB8m";
    }

}
