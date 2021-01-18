import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cartService.getItems(); // Define the items property to store the products in the cart.

  constructor(
    private cartService: CartService // Inject the CartService so that the CartComponent can use it by adding it to the constructor().
  ) {}

  ngOnInit() {}
}