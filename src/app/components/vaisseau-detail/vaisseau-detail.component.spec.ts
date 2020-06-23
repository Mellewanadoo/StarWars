import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauDetailComponent } from './vaisseau-detail.component';

describe('VaisseauDetailComponent', () => {
  let component: VaisseauDetailComponent;
  let fixture: ComponentFixture<VaisseauDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaisseauDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
