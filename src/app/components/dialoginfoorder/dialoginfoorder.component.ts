import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../services/orders/OrderService';
import {InputOrder} from '../../services/orders/remote/input/InputOrder';

@Component({
  selector: 'app-dialoginfoorder',
  templateUrl: './dialoginfoorder.component.html',
  styleUrls: ['./dialoginfoorder.component.styl'],
  providers: [OrderService]
})
export class DialoginfoorderComponent implements OnInit {

  order: InputOrder = new InputOrder();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrderService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.ordersService.getRemote(id).subscribe(object => {
      this.order = object;
      console.log(object);
    });
  }

}
