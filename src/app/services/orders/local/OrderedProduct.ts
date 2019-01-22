import {Product} from '../../product/Product';

export class OrderedProduct {

  constructor(private readonly _product: Product, private _quantity: number) {
  }

  static parse(json: any) {
    return new OrderedProduct(new Product(json.product), parseInt(json.quantity, 0));
  }

  increment() {
    this._quantity++;
  }

  decrement() {
    this._quantity++;
  }

  get id() {
    return this._product._id;
  }

  get name() {
    return this._product.name;
  }

  get quantity() {
    return this._quantity;
  }

  get image() {
    return this._product.image;
  }

  get price() {
    return this._product.price * this._quantity;
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
