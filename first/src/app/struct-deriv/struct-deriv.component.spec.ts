import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDerivComponent } from './struct-deriv.component';

describe('StructDerivComponent', () => {
  let component: StructDerivComponent;
  let fixture: ComponentFixture<StructDerivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructDerivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDerivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
