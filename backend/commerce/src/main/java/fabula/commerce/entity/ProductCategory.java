package fabula.commerce.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

import javax.persistence.*; 

@Entity
@Table(name = "categoria")
//@Data
@Getter
@Setter
public class ProductCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id; 
	
	@Column(name = "nomecategoria")
	private String nomeCategoria; 
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private Set<Product> products; 
}