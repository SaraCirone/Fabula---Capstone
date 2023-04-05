import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    product!: Product;
    // product: Product = new Product();

    constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(() => {
            this.handleProductDetails();
        }

        )

    }
    handleProductDetails() {
       const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

       this.productService.getProduc(theProductId).subscribe(
        data => {
            this.product = data;
        }
       )
    }


    addToCart() {

        console.log(`Hai aggiunto al carrello il libro ${this.product.titolo}, ${this.product.prezzo}`);
        const theCartItem = new CartItem(this.product);
        this.cartService.addToCart(theCartItem);


    }

}
