import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguserinfoComponent } from './dialoguserinfo.component';

describe('DialoguserinfoComponent', () => {
  let component: DialoguserinfoComponent;
  let fixture: ComponentFixture<DialoguserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoguserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
