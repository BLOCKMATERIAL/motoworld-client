export class Product {

  static parse(json) {
    return new Product(json._id, json.name, json.description, json.image, json.price, json.category);
  }

  public quantity = 0;

  constructor(
    public _id: string = null,
    public name: string = null,
    public description: string = null,
    public image: string = null,
    public price: number = 0,
    public category: string = null
  ) {}
}
