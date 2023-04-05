import { Product } from "./product";

export class CartItem {

    id: number;
    titolo: string;
    imgurl: string;
    prezzo: number;

    quantity: number;

    constructor(product: Product) {
        this.id = product.id;
        this.titolo = product.titolo;
        this.imgurl = product.imgurl;
        this.prezzo = product.prezzo;

        this.quantity = 1;

        }

}
