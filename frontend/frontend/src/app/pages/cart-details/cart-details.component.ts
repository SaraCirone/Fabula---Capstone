import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  ngOnInit(): void {

    this.listCartDetails();

  }
    listCartDetails() {
        this.cartItems = this.cartService.cartItems;

        this.cartService.totalPrice.subscribe(
            data => this.totalPrice = data
        );

        this.cartService.totalQuantity.subscribe(
            data => this.totalQuantity = data
        );

        this.cartService.computeCartTotals();
    }

    incrementQuantity(theCartItem: CartItem){
        this.cartService.addToCart(theCartItem);
    }

    decrementQuantity(theCartItem: CartItem) {
        this.cartService.decrementQuantity(theCartItem);
    }

    remove(theCartItem: CartItem) {
        this.cartService.remove(theCartItem);
    }

}
