import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-dialogcategories',
  templateUrl: './dialogcategories.component.html',
  styleUrls: ['./dialogcategories.component.styl']
})
export class DialogcategoriesComponent implements OnInit {

  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  objectTypes = [
    { type: "order", name:"Orders" },
    { type: "product", name:"Products" },
    { type: "categories", name:"Categories" }
  ];
  chosenType = this.objectTypes[0];


  ngOnInit() {
  }

  onTypeChosen(type) {
    this.chosenType = type;
    console.log(this.chosenType);
  }

}


