import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyorderComponent } from './emptyorder.component';

describe('EmptyorderComponent', () => {
  let component: EmptyorderComponent;
  let fixture: ComponentFixture<EmptyorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
