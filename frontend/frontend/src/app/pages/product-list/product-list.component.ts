import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
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
    isAuthenticated: boolean = false;

    constructor(private productService: ProductService, private cartService: CartService,  private oktaAuthService: OktaAuthStateService,  @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

    ngOnInit(): void {

            this.listProducts();
            this.oktaAuthService.authState$.subscribe(
                (result) => {
                  this.isAuthenticated = result.isAuthenticated!;
                }
              );
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
