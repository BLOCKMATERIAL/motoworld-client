import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../services/cart/CartItem";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.styl'],
  providers: [CartService]
})
export class CartComponent implements OnInit, OnItemInteract {

  items: CartItem[] = [];
  callback: OnItemInteract;

  constructor(private service: CartService) {
    this.refresh();
    this.callback = this;
  }

  refresh() {
    this.items = this.service.getStoredCart();
  }

  ngOnInit() {
  }

  onItemQuantityChanged(id: string, increase: boolean) {
    this.service.changeQuantity(id, increase);
  }

  onItemRemoved(id: string) {
    this.service.remove(id);
    this.refresh();
  }
}
