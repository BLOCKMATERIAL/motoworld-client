import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dialogcategories',
  templateUrl: './dialogcategories.component.html',
  styleUrls: ['./dialogcategories.component.styl']
})
export class DialogcategoriesComponent implements OnInit {

  object = {};

  constructor(private  router: ActivatedRoute) {} // {2}

  ngOnInit() {
    let id = this.router.snapshot.params.id;
    if (id.startsWith('new')) {
      return;
    }
    fetch(`http://motoworld.me/categories/${id}`)
      .then(value => value.json())
      .then(object => {
        this.object = object
      })
  }
}


