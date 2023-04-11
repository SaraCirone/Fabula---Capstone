package fabula.commerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fabula.commerce.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	
	
	
}
