package fabula.commerce.dto;

import java.util.Set;



import fabula.commerce.entity.Address;
import fabula.commerce.entity.Customer;
import fabula.commerce.entity.Order;
import fabula.commerce.entity.OrderItem;
import lombok.Data;

@Data
public class Purchase {

	private Customer customer; 
	
	private Address shippingAddress; 
	
	private Address billingAddress; 
	
	private Order order; 
	
	private Set<OrderItem> orderItems; 
}
