import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../services/cart/CartItem";
import {CartService} from "../../services/cart/cart.service";
import {OrderService} from '../../services/orders/OrderService';
import {OrderedProduct} from '../../services/orders/local/OrderedProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.styl'],
  providers: [CartService]
})
export class CartComponent implements OnInit, OnItemInteract {

  items: OrderedProduct[] = [];
  callback: OnItemInteract;

  constructor(private orderService: OrderService) {
    this.refresh();
    this.callback = this;
  }

  refresh() {
    this.items = this.orderService.localOrder.orderedProducts;
  }

  ngOnInit() {
  }

  onItemQuantityChanged(id: string, increase: boolean) {
    if (increase) {
      this.orderService.increment(id);
    } else {
      this.orderService.decrement(id);
    }
  }

  onItemRemoved(id: string) {
    this.orderService.removeProduct(id);
    this.refresh();
  }
}
