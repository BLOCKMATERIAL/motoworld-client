import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';
import {BsModalService} from 'ngx-bootstrap';
import {OrderService} from '../../services/orders/OrderService';
import {Product} from '../../services/product/Product';
import {ProductService} from '../../services/product/ProductService';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.styl'],
  providers: [CartService]
})
export class ItemInfoComponent implements OnInit {

  object: Product = new Product();

  constructor(
    private modalService: BsModalService,
    private productService: ProductService,
    private ordersService: OrderService,
    private  router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.router.snapshot.params.currentItemId;
    this.productService.getById(id).subscribe(product => {
      this.object = product;
    });
  }

  addToCart() {
    this.ordersService.addProduct(this.object);
  }
}
