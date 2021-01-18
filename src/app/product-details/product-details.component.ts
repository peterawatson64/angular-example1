import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product; // define product property

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService // Inject the cart service by adding it to the constructor().
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // The URL that matches the route provides the productId .
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // Define the addToCart() method, which adds the current product to the cart.
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  //The addToCart() method does the following:
  // Takes the current product as an argument.
  // Uses the CartService addToCart() method to add the product the cart.
  // Displays a message that you've added a product to the cart.
}
