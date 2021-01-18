import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { CartService } from '../cart.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cartService.getItems(); // Define the items property to store the products in the cart.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService, // Inject the CartService so that the CartComponent can use it by adding it to the constructor().

    private formBuilder: FormBuilder
  ) {}

  
  onSubmit(): void {
    // process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }




}