import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/services/cart.service';
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


    constructor(private formBuilder: FormBuilder, private formService: FormService, private cartService: CartService ) { }

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
                country: [''],
                zipCode: ['']

            }),
            billingAddress: this.formBuilder.group({
                street: [''],
                city: [''],
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
        console.log("Click invio");
        console.log(this.checkoutFormGroup!.get('customer')?.value);
        console.log("L'email è : " + this.checkoutFormGroup!.get('customer')?.value.email + "| " + " Il nome è: " + this.checkoutFormGroup!.get('customer')?.value.firstName + "| " + " Il cognome è: " + this.checkoutFormGroup!.get('customer')?.value.lastName);
        //è stato inserito ? dopo get('customer') per fargli capire che non è un valore nullo e fargli passare, dunque, i dati

        console.log(this.checkoutFormGroup!.get('shippingAddress')?.value);
        console.log("La via/piazza è : " + this.checkoutFormGroup!.get('shippingAddress')?.value.street + "| " + " La città è: " + this.checkoutFormGroup!.get('shippingAddress')?.value.city + "| " + " Il paese è: " + this.checkoutFormGroup!.get('shippingAddress')?.value.country + "| " + " Il codice postale è: " + this.checkoutFormGroup!.get('shippingAddress')?.value.zipCode );

        console.log(this.checkoutFormGroup!.get('creditCard')?.value);
    }

}
