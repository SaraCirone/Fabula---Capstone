import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';

@Injectable({
    providedIn: 'root'
})


export class CartService {

    cartItems: CartItem[] = [];

    totalPrice: Subject<number> = new BehaviorSubject<number>(0);
    totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    addToCart(theCartItem: CartItem) {
        let alreadyExistsInCart: boolean = false;
        let existingCartItem: CartItem  | undefined = undefined;

        if(this.cartItems.length > 0 ) {

            existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);


            // for(let tempCartItem of this.cartItems){
            //     if (tempCartItem.id === theCartItem.id) {
            //         existingCartItem = tempCartItem;
            //         break;
            //     }
            // }
                alreadyExistsInCart = (existingCartItem != undefined);
        }

        if (alreadyExistsInCart) {
            existingCartItem!.quantity++; // il punto esclamativo informa TypeScript che sei sicuro che existingCartItem non sia null
        } else {
            this.cartItems.push(theCartItem);
        }

        this.computeCartTotals();
    }

    computeCartTotals() {
        let totalPriceValue: number = 0;
        let totalQuantityValue: number = 0;

        for (let currentCartItem of this.cartItems) {
            totalPriceValue += currentCartItem.quantity * currentCartItem.prezzo;
            totalQuantityValue += currentCartItem.quantity;
        }

        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantityValue);

        this.logCartData(totalPriceValue, totalQuantityValue);

    }

    logCartData(totalPriceValue: number, totalQuantityValue: number) {

        console.log('Contenuto del carrello');
        for (let tempCartItem of this.cartItems) {
            const subTotalPrice = tempCartItem.quantity * tempCartItem.prezzo;
            console.log(`titolo: ${tempCartItem.titolo}. quantità: ${tempCartItem.quantity}, prezzo = ${tempCartItem.prezzo}, totale = ${subTotalPrice}`);
        }


        console.log(`prezzo totale: ${totalPriceValue.toFixed(2)}, quantità totale: ${totalQuantityValue}`);
        console.log('-------');
    }

    decrementQuantity(theCartItem: CartItem) {
        theCartItem.quantity--;
        if (theCartItem.quantity === 0){
         this.remove(theCartItem);
        }else {
            this.computeCartTotals();
        }
    }
    remove(theCartItem: CartItem) {
       const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id);

       if (itemIndex > -1) {
        this.cartItems.splice(itemIndex, 1);

        this.computeCartTotals();
       }
    }


}
