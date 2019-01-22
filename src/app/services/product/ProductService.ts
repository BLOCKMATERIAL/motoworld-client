import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./Product";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private static url = "http://motoworld.me/products";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(ProductService.url);
  }

  getById(id: number) {
    return this.http.get<Product>(ProductService.url + '/' + id);
  }

  create(product: Product) {
    return this.http.post<Product>(ProductService.url, product);
  }

  update(product: Product) {
    return this.http.put<Product>(ProductService.url + '/' + product._id, product);
  }

  delete(id: string) {
    return this.http.delete(ProductService.url + '/' + id);
  }

}
