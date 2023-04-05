package fabula.commerce.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*; 

@Entity
@Table(name = "prodotti")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "id")
	private int id; 
	
	@Column(name = "titolo")
	private String titolo; 
	
	@Column(name = "descrizione")
	private String descrizione; 
	
	@Column(name = "codbook")
	private String codbook; 
	
	@Column(name = "imgurl")
	private String imgurl; 
	
	@Column(name = "unit") 
	private Integer unit; 
	
	@Column(name = "prezzo")
	private BigDecimal prezzo; 
	
	@ManyToOne
	@JoinColumn(name = "categoria_id", nullable = false)
	private ProductCategory category; 
	
	@Column(name = "active")
	private boolean active; 
	
	@Column(name = "autore")
	private String autore;
	
	@Column(name = "numero_pagine")
	private Integer numeropagine;
	
	@Column(name = "formato")
	private String formato;
	
	@Column(name = "data_pubblicazione")
	private String datapubblicazione;
	
	@Column(name = "lingua")
	private String lingua;

}


