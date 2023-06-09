package fabula.commerce.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="order_item")
@Getter
@Setter
public class OrderItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id; 
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "quantity")
	private Integer quantity; 
	
	@Column(name = "unit_price")
	private BigDecimal unitPrice; 

	
	@Column(name = "prodotti_id")
	private Integer prodottiId; 
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order; 
}



