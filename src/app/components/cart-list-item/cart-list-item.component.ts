import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../services/cart/CartItem';
import {Attribute} from '@angular/compiler';
import {OrderedProduct} from '../../services/orders/local/OrderedProduct';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.styl']
})
export class CartListItemComponent implements OnInit {
  @Input() item: OrderedProduct;
  @Input() callback: OnItemInteract;

  constructor() {
  }

  ngOnInit() {

  }

  onItemRemoved() {
    this.callback.onItemRemoved(this.item.id);
  }

  onItemQuantityChanged(increase: boolean) {
    this.item.increment()
    this.callback.onItemQuantityChanged(this.item.id, increase);
  }
}
