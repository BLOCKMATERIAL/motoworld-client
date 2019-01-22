import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category/CategoryService';
import {Category} from '../../services/category/Category';
import {Observable} from 'rxjs';
import {ProductService} from '../../services/product/ProductService';
import {Product} from '../../services/product/Product';


@Component({
  selector: 'app-dialogcategories',
  templateUrl: './dialogcategories.component.html',
  styleUrls: ['./dialogcategories.component.styl'],
  providers: [CategoryService]
})
export class DialogcategoriesComponent implements OnInit {

  object: Category = new Category();
  create = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoryService
  ) {
  } // {2}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id.startsWith('new')) {
      this.create = true;
      return;
    }
    this.categoriesService.getById(id)
      .subscribe(data => this.object = data);
  }

  onSubmitClick() {
    const observable: Observable<Category> = this.create
      ? this.categoriesService.create(this.object)
      : this.categoriesService.update(this.object);
    observable.subscribe(
      data => {
        this.object._id = data._id;
        alert(this.create ? 'Категория создана' : 'Категория обновлена');
      }, error => {
        alert(error.toString());
      });
  }

  onItemRemoveClick() {
    if (this.create) {
      this.object = new Category();
    } else {
      this.categoriesService.delete(this.object._id)
        .subscribe(
          data => {
            alert('Категория удалёна');
            this.router.navigate(['/account']);
          },
          error => {
            alert(error.toString());
          }
        );
    }
  }

}


