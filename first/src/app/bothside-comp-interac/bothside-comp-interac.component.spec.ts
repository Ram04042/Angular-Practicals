import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothsideCompInteracComponent } from './bothside-comp-interac.component';

describe('BothsideCompInteracComponent', () => {
  let component: BothsideCompInteracComponent;
  let fixture: ComponentFixture<BothsideCompInteracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothsideCompInteracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BothsideCompInteracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
