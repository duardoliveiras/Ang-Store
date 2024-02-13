package com.angstore.Controller;

import java.util.HashMap;
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
    public String paymentCheckoutPage(@RequestBody CheckoutPayment payment) throws StripeException{
        init();

        // Create a new Checkout Session for the order
		SessionCreateParams params = SessionCreateParams.builder()
			
				.addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
				.setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl(payment.getSuccess())
				.setCancelUrl(
						payment.getCancel())
				.addLineItem(
						SessionCreateParams.LineItem.builder().setQuantity(payment.getQuantity())
								.setPriceData(
										SessionCreateParams.LineItem.PriceData.builder()
												.setCurrency(payment.getCurrency()).setUnitAmount(payment.getAmount())
												.setProductData(SessionCreateParams.LineItem.PriceData.ProductData
														.builder().setName(payment.getName()).build())
											.build())
							.build())
				.build();
        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());

        return gson.toJson(responseData);
    }

    private static void init(){
        Stripe.apiKey = "sk_test_51OjP0cBGVQWFzAE7E4npyiuQebO60GpRw98ZKvUuNi2F5e1p2ZVxQoA4fsT9g8G7oCskC5fasZdZ2iQFMp58xPlm00JCi4lB8m";
    }

}
