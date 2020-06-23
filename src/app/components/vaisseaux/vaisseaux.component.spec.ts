import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauxComponent } from './vaisseaux.component';

describe('VaisseauxComponent', () => {
  let component: VaisseauxComponent;
  let fixture: ComponentFixture<VaisseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaisseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
