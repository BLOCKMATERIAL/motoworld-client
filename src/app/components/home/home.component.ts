import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  orders = [];

  constructor() {
  }

//call the fetch function


  ngOnInit() {
    this.retrieveOrders();
  }

  retrieveOrders() {
    fetch('http://motoworld.me/orders')
      .then(resp => resp.json())
      .then(data => {
        this.orders = data;
      });
  }


}
