import {OrderedProduct} from './OrderedProduct';
import {Product} from '../../product/Product';


export class LocalOrder {

  public name: string;
  public delivery: string;

  private _orderedProducts: OrderedProduct[] = [];

  constructor(orderedProduct: OrderedProduct[] = []) {
    this._orderedProducts = orderedProduct;
  }

  static parse(json: any): LocalOrder {
    const localOrder = new LocalOrder(json._orderedProducts.map(op => {
      return OrderedProduct.parse(op);
    }));
    localOrder.name = json.name;
    localOrder.delivery = json.delivery;
    return localOrder;
  }

  addProduct(product: OrderedProduct) {
    const index = this._orderedProducts.findIndex(s => s.id === product.id);
    if (index === -1) {
      this._orderedProducts.push(product);
    } else {
      this._orderedProducts[index].increment();
    }
  }

  removeProduct(id: string) {
    const index = this._orderedProducts.findIndex(s => s.id === id);
    if (index !== -1) {
      this._orderedProducts.splice(index, 1);
    }
  }

  increment(id: string) {
    const product = this._orderedProducts.find(value => value.id === id);
    if (product) {
      product.increment();
    }
  }

  decrement(id: string) {
    const product = this._orderedProducts.find(value => value.id === id);
    if (product) {
      product.increment();
    }
  }

  get orderedProducts() {
    return this._orderedProducts;
  }

  get sum() {
    return this._orderedProducts.map((p, i) => p.price).reduce((a, b) => a + b, 0);
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
