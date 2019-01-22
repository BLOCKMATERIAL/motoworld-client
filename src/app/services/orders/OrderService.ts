import {LocalOrder} from './local/LocalOrder';
import {HttpClient} from '@angular/common/http';
import {RemoteOrder} from './remote/output/RemoteOrder';
import {RemoteOrderItem} from './remote/output/RemoteOrderItem';

export class OrderService {

  private static url = 'http://motoworld.me/orders';
  private static ORDER_KEY = 'order-cart';

  private _sessionStorage: Storage;

  constructor(private http: HttpClient) {
    this._sessionStorage = sessionStorage;
  }

  increment(id: string) {
    const order = this.localOrder;
    order.increment(id);
    this.save(order);
  }

  decrement(id: string) {
    const order = this.localOrder;
    order.decrement(id);
    this.save(order);
  }

  public get localOrder() {
    const content = this._sessionStorage.getItem(OrderService.ORDER_KEY);
    return content ? LocalOrder.parse(JSON.parse(content)) : new LocalOrder();
  }

  submitOrder() {
    const localOrder = this.localOrder;
    const remoteOrder = new RemoteOrder('', localOrder.delivery, localOrder.orderedProducts.map(
      (p, i) => new RemoteOrderItem(p.id, p.quantity)
    ));
    return this.http.post(OrderService.url, remoteOrder);
  }

  save(order: LocalOrder) {
    this._sessionStorage.setItem(OrderService.ORDER_KEY, order.toString());
  }

  clear() {
    this._sessionStorage.clear();
  }
}
