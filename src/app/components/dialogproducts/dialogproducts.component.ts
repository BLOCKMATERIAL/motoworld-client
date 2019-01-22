import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product/ProductService";
import {CategoryService} from "../../services/category/CategoryService";
import {Category} from "../../services/category/Category";
import {Observable} from "rxjs";
import {Product} from "../../services/product/Product";
import {delay, share} from 'rxjs/operators';

@Component({
  selector: 'app-dialogproducts',
  templateUrl: './dialogproducts.component.html',
  styleUrls: ['./dialogproducts.component.styl'],
  providers: [ProductService, CategoryService]
})
export class DialogproductsComponent implements OnInit {

  categories: Category[] = [];
  object: Product = new Product();
  title = "";
  create = false;

  constructor(
    private  router: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoryService
  ) { } // {2}

  ngOnInit() {
    let id = this.router.snapshot.params.id;
    this.categoriesService.getAll()
      .subscribe(data => this.categories = data);
    if (id.startsWith('new')) {
      this.create = true;
      this.title = "Добавить товар";
      return;
    } else {
      this.title = "Обновить товар";
    }
    this.productService.getById(id).pipe(share())
      .subscribe(data => this.object = data);
  }

  onSubmitClick() {
    const observable: Observable<Product> = this.create
      ? this.productService.create(this.object)
      : this.productService.update(this.object);

    observable.subscribe(
      data => {
        this.object._id = data._id;
        alert(this.create ? "Товар создан" : "Товар обновлён");
      }, error => {
        alert(error);
      });
  }
}


