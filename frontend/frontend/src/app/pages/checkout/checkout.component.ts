import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/order-item';
import { Purchase } from 'src/app/models/purchase';
import { State } from 'src/app/models/state';
import { CartService } from 'src/services/cart.service';
import { CheckoutService } from 'src/services/checkout.service';
import { FormService } from 'src/services/form.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    checkoutFormGroup!: FormGroup;

    totalPrice: number = 0;
    totalQuantity: number = 0;

    creditCardYears: number[] = [];
    creditCaardMonths: number[] = [];

    countries: Country[] = [];

    shippingAddressStates: State[] = [];
    billingAddressStates: State[] = [];


    constructor(private formBuilder: FormBuilder, private formService: FormService, private cartService: CartService, private checkoutService: CheckoutService, private router: Router  ) { }

    ngOnInit(): void {


        this.reviewCartDetails();



        this.checkoutFormGroup = this.formBuilder.group({
            customer: this.formBuilder.group({
                firstName: [''],
                lastName: [''],
                email: ['']
            }),
            shippingAddress: this.formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                country: [''],
                zipCode: ['']

            }),
            billingAddress: this.formBuilder.group({
                street: [''],
                city: [''],
                state: [''],
                country: [''],
                zipCode: ['']
              }),
            creditCard: this.formBuilder.group({
                cardType: [''],
                nameOnCard: [''],
                cardNumber: [''],
                securityCode: [''],
                expirationMonth: [''],
                expirationYear: ['']

            })
        });


        const startMonth: number = new Date().getMonth() +1;
        console.log(startMonth);

        this.formService.getCreditCardMonths(startMonth).subscribe(
            data => {
                console.log(JSON.stringify(data));
                this.creditCaardMonths = data;
            }
        );

        this.formService.getCreditCardYears().subscribe(
            data => {
                console.log(JSON.stringify(data));
                this.creditCardYears = data;
        });



        this.formService.getCountries().subscribe(
            data => {
                console.log(JSON.stringify(data));
                this.countries = data;
            }
        );



    }

    reviewCartDetails() {

        this.cartService.totalQuantity.subscribe(
            totalQuantity => this.totalQuantity = totalQuantity
        );

        this.cartService.totalPrice.subscribe(
            totalPrice => this.totalPrice = totalPrice
        );
    }

    onSubmit() {

        let order = new Order();
        order.totalPrice = this.totalPrice;
        order.totalQuantity = this.totalQuantity;

        const cartItems = this.cartService.cartItems;

        let orderItems: OrderItem[]= [];

        // for (let i=0; i < cartItems.length; i++) {
        //     orderItems[i] = new OrderItem(cartItems[i]);
        // }

        let orderItemsShort: OrderItem[] = cartItems.map(tempCartitem => new OrderItem(tempCartitem));

        let purchase = new Purchase();

        purchase.customer = this.checkoutFormGroup.controls['customer'].value;

        purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
        const shippingState: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
        const shippingCountry: Country = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
        purchase.shippingAddress.state = shippingState.name;
        purchase.shippingAddress.country = shippingCountry.name;


        purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
        const billingState: State = JSON.parse(JSON.stringify(purchase.billingAddress.state));
        const billingCountry: Country = JSON.parse(JSON.stringify(purchase.billingAddress.country));
        purchase.billingAddress.state = billingState.name;
        purchase.billingAddress.country = billingCountry.name;



        purchase.order = order;
        purchase.orderItems = orderItems;

        this.checkoutService.placeOrder(purchase).subscribe(
            {
                next: response => {
                    alert(`Il tuo ordine è stato ricevuto! verrà presto elaborarto! il tuo numero di ordine è: ${response.orderTrackingNumber}`);

                    this.restCart();
                },
                error: err => {
                    alert(`C'è stato un'errore nel tuo ordine: ${err.mesage}`);
                }
            }
        );

    }
    restCart() {
        this.cartService.cartItems = [];
        this.cartService.totalPrice.next(0);
        this.cartService.totalQuantity.next(0);

        this.checkoutFormGroup.reset();

        this.router.navigateByUrl("/product-list");
    }


    getStates(formGroupName: string) {
        const formGroup = this.checkoutFormGroup.get(formGroupName);
        const countryCode = formGroup?.value.country.code;
        const countryName = formGroup?.value.country.name;

        console.log(`{formGroupName} country code: ${countryCode}`);
        console.log(`{formGroupName} country code: ${countryName}`);

        this.formService.getStates(countryCode).subscribe(
            data => {
                if (formGroupName === 'shippingAddress') {
                    this.shippingAddressStates = data;
                } else {
                    this.billingAddressStates = data;
                }

                formGroup?.get('state')?.setValue(data[0]);

            }
        );
    }

}
