import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from "../../services/cart/cart.service";
import {BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.styl'],
  providers: [CartService]
})
export class ItemInfoComponent implements OnInit {

  callback: OnItemInteract;
  currentItemId: string;
  name: string;
  image: string;
  description: string;

  constructor(
    private modalService: BsModalService,
    private service: CartService,
    private  router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentItemId = this.router.snapshot.params.currentItemId;
    fetch(`http://motoworld.me/products/${this.currentItemId}`)
      .then(value => value.json())
      .then(object => {
        this.name = object.name;
        this.image = object.image;
        this.description = object.description;
      })
  }

  addToCart() {
    let inCart = false;
    let cart = this.service.getStoredCart();
    for (var ct in cart) {
      if(this.currentItemId === cart[ct].itemId) {
        inCart = true;
      }
    }
    
    if(inCart) {
      this.service.changeQuantity(this.currentItemId, true);
      console.log("outaasdasdas");
    } else {
      this.service.addItem(this.currentItemId, 1);
    }
  }
}
