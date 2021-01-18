import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent {
  @Input() product; //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Output() notify = new EventEmitter(); //To make the Notify Me button work, the child component needs to notify and pass the data to the parent component. The ProductAlertsComponent needs to emit an event when the user clicks Notify Me and the ProductListComponent needs to respond to the event.

  constructor() {}

  ngOnInit() {}
}