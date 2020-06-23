import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVaisseauComponent } from './edit-vaisseau.component';

describe('EditVaisseauComponent', () => {
  let component: EditVaisseauComponent;
  let fixture: ComponentFixture<EditVaisseauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVaisseauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVaisseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
