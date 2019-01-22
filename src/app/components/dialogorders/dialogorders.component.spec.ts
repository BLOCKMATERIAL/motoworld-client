import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogordersComponent } from './dialogorders.component';

describe('DialogordersComponent', () => {
  let component: DialogordersComponent;
  let fixture: ComponentFixture<DialogordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
