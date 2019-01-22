import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../services/cart/CartItem";
import {Attribute} from "@angular/compiler";

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.styl']
})
export class CartListItemComponent implements OnInit {
  @Input() item: CartItem;
  @Input() callback: OnItemInteract;
  name: string = null;
  image: string = null;
  description: string = null;

  constructor() {}

  ngOnInit() {
    fetch(`http://motoworld.me/products/${this.item.itemId}`)
      .then(value => {
        return value.json()
      })
      .then(item => {
        this.name = item.name;
        this.image = item.image;
        this.description = item.description;
      });
  }

  onItemRemoved() {
    this.callback.onItemRemoved(this.item.itemId);
  }

  onItemQuantityChanged(increase: boolean) {
    this.item.count += increase ? 1 : -1;
    this.callback.onItemQuantityChanged(this.item.itemId, increase);
  }
}
