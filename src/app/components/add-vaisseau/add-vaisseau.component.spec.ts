import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaisseauComponent } from './add-vaisseau.component';

describe('AddVaisseauComponent', () => {
  let component: AddVaisseauComponent;
  let fixture: ComponentFixture<AddVaisseauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVaisseauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaisseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
