import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    product: Product[] = [];

    constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit(): void {

            this.listProducts();

    }

    listProducts(){
        this.productService.getProductList().subscribe(
            data => {
              this.product = data;
            }
        )
    }

    addToCart(theProduct: Product) {

        console.log(`Aggiunto al carrello:  ${theProduct.titolo}, ${theProduct.prezzo}`);

        const theCartItem = new CartItem(theProduct);

        this.cartService.addToCart(theCartItem);
    }
}
