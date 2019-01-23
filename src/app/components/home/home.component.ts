import {Component, OnInit} from '@angular/core';
import {FetchService} from '../../services/fetch/FetchService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [FetchService]
})
export class HomeComponent implements OnInit {
  products = [];
  categories = [];

  constructor(private fetchService: FetchService) {
  }

  ngOnInit() {
    this.retrieveProducts();
    this.retrieveCategories();
  }

  retrieveProducts() {
    this.fetchService.fetch('http://motoworld.me/products')
      .subscribe(data => this.products = data);
  }

  retrieveCategories() {
    this.fetchService.fetch('http://motoworld.me/categories')
      .subscribe(data => this.categories = data);
  }

  onCategoryChanged(category) {
    this.fetchService.fetch(`http://motoworld.me/categories/${category._id}/products`)
      .subscribe(data => this.products = data);
  }
}
