import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "./Category";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private static url = "http://motoworld.me/categories";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Category[]>(CategoryService.url);
  }

  getById(id: number) {
    return this.http.get<Category>(CategoryService.url + '/' + id);
  }

  create(product: Category) {
    return this.http.post<Category>(CategoryService.url, product);
  }

  update(product: Category) {
    return this.http.put<Category>(CategoryService.url + '/' + product._id, product);
  }

  delete(id: string) {
    return this.http.delete<Category>(CategoryService.url + '/' + id);
  }

}
