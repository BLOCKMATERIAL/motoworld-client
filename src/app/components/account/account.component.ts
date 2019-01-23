import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {Router} from "@angular/router";
import {FetchService} from '../../services/fetch/FetchService';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.styl']
})
export class AccountComponent implements OnInit {

  static DOMAIN = "http://motoworld.me/";

  static TYPE_ORDERS = 'orders';
  static TYPE_PRODUCTS = 'products';
  static TYPE_CATEGORIES = 'categories';

  private currentType = AccountComponent.TYPE_ORDERS;
  public objects = [];

  constructor(protected router: Router, private fetchService: FetchService) {} // {2}

  changeType(type: string) {
    this.currentType = type;
    this.loadItem();
  }

  objectTypes = [
    { type: AccountComponent.TYPE_ORDERS, name:"Orders" },
    { type: AccountComponent.TYPE_PRODUCTS, name:"Products" },
    { type: AccountComponent.TYPE_CATEGORIES, name:"Categories" }
  ];

  ngOnInit() {
    this.loadItem();
  }

  loadItem() {
    this.fetchService.fetch(AccountComponent.DOMAIN + this.currentType)
      .subscribe(data => this.objects = data);
  }

  onItemClick(itemId: string) {
    const id = itemId ? itemId : 'new-item'
    let endpoint = `/${this.currentType}/${id}`;
    this.router.navigate([endpoint]);
  }

  getItemContent(object) {
    switch (this.currentType) {
      case AccountComponent.TYPE_ORDERS: return object._id;
      default: return object.name;
    }
  }

  getRouterLink() {
    return `/${this.currentType}`;
  }
}


