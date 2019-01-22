import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  products = [];
  categories = [];
  chosenCategory = null;

  constructor() {
  }

//call the fetch function


  ngOnInit() {
    this.retrieveProducts();
    this.retrieveCategories();
  }

  retrieveProducts() {
    fetch('http://motoworld.me/products?pageSize=1')
      .then(resp => resp.json())
      .then(data => {
        this.products = data;
      });
  }

  retrieveCategories() {
    fetch('http://motoworld.me/categories')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.categories = data;
      });
  }

  onCategoryChanged(category) {
    console.log(category);
    fetch(`http://motoworld.me/categories/${category._id}/products`)
      .then(resp => resp.json())
      .then(data => {
        this.products = data;
      });
  }
}
