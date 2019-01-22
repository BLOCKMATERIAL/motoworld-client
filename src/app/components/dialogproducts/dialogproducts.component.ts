import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/ProductService';
import {CategoryService} from '../../services/category/CategoryService';
import {Category} from '../../services/category/Category';
import {Observable} from 'rxjs';
import {Product} from '../../services/product/Product';
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
  title = '';
  create = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoriesService: CategoryService
  ) {
  } // {2}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.categoriesService.getAll()
      .subscribe(data => this.categories = data);
    if (id.startsWith('new')) {
      this.create = true;
      this.title = 'Добавить товар';
      return;
    } else {
      this.title = 'Обновить товар';
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
        alert(this.create ? 'Товар создан' : 'Товар обновлён');
      }, error => {
        alert(error.toString());
      });
  }

  onDeleteClick() {
    console.log("HERE");
    if (this.create) {
      this.object = new Product();
    } else {
      this.productService.delete(this.object._id)
        .subscribe(
          data => {
            alert('Товар удалён');
            this.router.navigate(['/account']);
          },
          error => {
            alert(error.toString());
          }
        );
    }
  }
}


