import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productId!: number;


    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imgurl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.prezzo;
        this.productId = cartItem.id;
    }

}
