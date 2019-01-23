import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../services/orders/UserInfo';
import {OrderService} from '../../services/orders/OrderService';

@Component({
  selector: 'app-dialoguserinfo',
  templateUrl: './dialoguserinfo.component.html',
  styleUrls: ['./dialoguserinfo.component.styl']
})
export class DialoguserinfoComponent implements OnInit {

  userInfo: UserInfo = new UserInfo();
  price = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.price = this.orderService.localOrder.sum;
  }

  submit() {
    this.orderService.setupUserInfo(this.userInfo);
    this.orderService.submitOrder()
      .subscribe(
        order => this.orderService.clear(),
          err => alert(err.toString())
        );
  }


}
