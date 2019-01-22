import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogproductsComponent } from './dialogproducts.component';

describe('DialogproductsComponent', () => {
  let component: DialogproductsComponent;
  let fixture: ComponentFixture<DialogproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
