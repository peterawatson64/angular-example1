import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = []; //define an items property to store the array of the current products in the cart.

  // Define methods to add items to the cart, return cart items, and clear the cart items.

  addToCart(product) {
    this.items.push(product); // appends a product to an array of items.
  }

  getItems() {
    return this.items; // collects the items users add to the cart and returns each item with its associated quantity.
  }

  clearCart() {
    this.items = [];
    return this.items; // returns an empty array of items, which empties the cart.
  }

  getShippingPrices() {
    return this.http.get("assets/shipping.json");
  }

  constructor(private http: HttpClient) {}
}
