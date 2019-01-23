import {LocalOrder} from './local/LocalOrder';
import {HttpClient} from '@angular/common/http';
import {RemoteOrder} from './remote/output/RemoteOrder';
import {RemoteOrderItem} from './remote/output/RemoteOrderItem';
import {InputTypeOrder} from './remote/input/InputTypeOrder';
import {InputOrder} from './remote/input/InputOrder';
import {Injectable} from '@angular/core';
import {Product} from '../product/Product';
import {OrderedProduct} from './local/OrderedProduct';
import {UserInfo} from './UserInfo';

@Injectable({
  providedIn: 'root',
})
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
    const remoteOrder = new RemoteOrder('5c476ef846e5e378fc702415', localOrder.delivery, localOrder.orderedProducts.map(
      (p, i) => new RemoteOrderItem(p.id, p.quantity)
    ));
    console.log(remoteOrder);
    return this.http.post<any>(OrderService.url, remoteOrder);
  }

  save(order: LocalOrder) {
    this._sessionStorage.setItem(OrderService.ORDER_KEY, order.toString());
  }

  getRemote(id: string) {
    return this.http.get<InputOrder>(`${OrderService.url}/${id}`);
  }

  clear() {
    this._sessionStorage.clear();
  }

  setupUserInfo(info: UserInfo) {
    const local = this.localOrder;
    local.delivery = info.stringify();
    this.save(local);
  }

  addProduct(product: Product) {
    const local = this.localOrder;
    local.addProduct(new OrderedProduct(product, 1));
    this.save(local);
  }

  removeProduct(id: string) {
    const local = this.localOrder;
    local.removeProduct(id);
    this.save(local);
  }
}
