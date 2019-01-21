import {CartItem} from "./CartItem";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private static CART_KEY = "cart";

  private sessionStorage: Storage;

  constructor() {
    this.sessionStorage = sessionStorage;
  }

  public addItem(itemId: string, itemCount: number) {
    let cart = this.getStoredCart();
    if (!cart) {
      cart = [];
    }

    cart.push(new CartItem(itemId, itemCount));
    this.writeCart(cart)
  }

  public changeQuantity(itemId: string, increase: boolean) {
    let cart = this.getStoredCart();
    let item = cart.filter(item => item.itemId == itemId)[0];
    item.count += increase ? 1 : -1;
    console.log(cart);
    this.writeCart(cart);
  }

  public remove(itemId: string) {
    let cart = this.getStoredCart().filter(item => item.itemId != itemId);
    this.writeCart(cart)
  }

  private writeCart(cart: CartItem[]) {
    this.sessionStorage.setItem(CartService.CART_KEY, JSON.stringify(cart));
  }

  public getStoredCart(): CartItem[] {
    return JSON.parse(this.sessionStorage.getItem(CartService.CART_KEY)) as CartItem[];
  }
}
