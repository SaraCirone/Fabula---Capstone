package fabula.commerce.service;

import org.springframework.beans.factory.annotation.Autowired;

import fabula.commerce.dto.Purchase;
import fabula.commerce.dto.PurchaseResponse;

public interface CheckoutService {

	@Autowired
	PurchaseResponse placeOrder(Purchase purchase);
	
}
