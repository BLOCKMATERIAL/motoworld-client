import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcategoriesComponent } from './dialogcategories.component';

describe('DialogcategoriesComponent', () => {
  let component: DialogcategoriesComponent;
  let fixture: ComponentFixture<DialogcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
