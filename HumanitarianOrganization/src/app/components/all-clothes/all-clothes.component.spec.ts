import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClothesComponent } from './all-clothes.component';

describe('AllClothesComponent', () => {
  let component: AllClothesComponent;
  let fixture: ComponentFixture<AllClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
